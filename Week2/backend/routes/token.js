const express = require('express');
const router = express.Router();
const ethers = require('ethers');
const NFTRecord = require('../models/NFTRecord');
const InternProfile = require('../models/InternProfile');
const TaskTracking = require('../models/TaskTracking');

// Load contract ABIs (assuming they are in artifacts folder)
const InternRewardTokenABI = require('../../artifacts/InternRewardToken.json').abi;
const TaskCompletionTokenABI = require('../../artifacts/TaskCompletionToken.json').abi;
const AttendanceTokenABI = require('../../artifacts/AttendanceToken.json').abi;
const CertificateNFTABI = require('../../artifacts/CertificateNFT.json').abi;

// Setup provider and signer
const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Contract instances
const internRewardToken = new ethers.Contract(process.env.INTERN_REWARD_TOKEN_ADDRESS, InternRewardTokenABI, signer);
const taskCompletionToken = new ethers.Contract(process.env.TASK_COMPLETION_TOKEN_ADDRESS, TaskCompletionTokenABI, signer);
const attendanceToken = new ethers.Contract(process.env.ATTENDANCE_TOKEN_ADDRESS, AttendanceTokenABI, signer);
const certificateNFT = new ethers.Contract(process.env.CERTIFICATE_NFT_ADDRESS, CertificateNFTABI, signer);

// POST /api/token/mint - Mint tokens or NFTs
router.post('/mint', async (req, res) => {
  try {
    const { internId, tokenType, amount, tokenURI } = req.body;

    const intern = await InternProfile.findById(internId);
    if (!intern) {
      return res.status(404).json({ error: 'Intern not found' });
    }

    let tx, tokenId;

    switch (tokenType) {
      case 'intern_reward':
        tx = await internRewardToken.mint(intern.walletAddress, ethers.parseEther(amount.toString()));
        break;
      case 'task_completion':
        tx = await taskCompletionToken.mint(intern.walletAddress, ethers.parseEther(amount.toString()));
        break;
      case 'attendance':
        tx = await attendanceToken.mint(intern.walletAddress, ethers.parseEther(amount.toString()));
        break;
      case 'certificate_nft':
        tx = await certificateNFT.mintNFT(intern.walletAddress, tokenURI);
        tokenId = await certificateNFT.tokenId();
        break;
      default:
        return res.status(400).json({ error: 'Invalid token type' });
    }

    await tx.wait();

    // Record NFT minting in DB if applicable
    if (tokenType === 'certificate_nft') {
      const newNFT = new NFTRecord({
        internId,
        tokenId: tokenId.toString(),
        contractAddress: process.env.CERTIFICATE_NFT_ADDRESS,
        tokenURI,
        nftType: 'certificate',
        transactionHash: tx.hash
      });
      await newNFT.save();

      // Update intern's NFTs
      intern.nftsOwned.push(newNFT._id);
      await intern.save();
    }

    res.json({ message: 'Token minted successfully', transactionHash: tx.hash });
  } catch (error) {
    res.status(500).json({ error: 'Minting failed', details: error.message });
  }
});

module.exports = router;
