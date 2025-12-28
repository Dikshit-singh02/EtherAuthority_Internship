const router = express.Router();
const ethers = require('ethers');
const NFTRecord = require('../models/NFTRecord');
const InternProfile = require('../models/InternProfile');

// Load CertificateNFT ABI
const CertificateNFTABI = require('../../../artifacts/CertificateNFT.json').abi;

// Setup provider and signer
const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// CertificateNFT contract instance
const certificateNFT = new ethers.Contract(process.env.CERTIFICATE_NFT_ADDRESS, CertificateNFTABI, signer);
const express = require('express');
const router = express.Router();
const ethers = require('ethers');
const NFTRecord = require('../models/NFTRecord');
const InternProfile = require('../models/InternProfile');

// Load CertificateNFT ABI
const CertificateNFTABI = require('../../../artifacts/CertificateNFT.json').abi;

// Setup provider and signer (only if environment variables are set)
let certificateNFT = null;
if (process.env.SEPOLIA_RPC_URL && process.env.PRIVATE_KEY && process.env.CERTIFICATE_NFT_ADDRESS) {
  try {
    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    certificateNFT = new ethers.Contract(process.env.CERTIFICATE_NFT_ADDRESS, CertificateNFTABI, signer);
  } catch (error) {
    console.warn('Failed to initialize blockchain connection:', error.message);
  }
}

// POST /api/token/mint-nft - Mint Certificate NFT
router.post('/mint-nft', async (req, res) => {
  try {
    const { internId, tokenURI } = req.body;

    if (!internId || !tokenURI) {
      return res.status(400).json({ error: 'internId and tokenURI are required' });
    }

    if (!certificateNFT) {
      return res.status(500).json({ error: 'Blockchain connection not configured' });
    }

    const intern = await InternProfile.findById(internId);
    if (!intern) {
      return res.status(404).json({ error: 'Intern not found' });
    }

    // Mint NFT using ethers.js
    const tx = await certificateNFT.mintNFT(intern.walletAddress, tokenURI);
    await tx.wait();

    // Get the token ID (assuming the contract has a tokenId counter)
    const tokenId = await certificateNFT.tokenId();

    // Record NFT in database
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

    res.json({
      message: 'NFT minted successfully',
      transactionHash: tx.hash,
      tokenId: tokenId.toString(),
      nft: newNFT
    });
  } catch (error) {
    console.error('Minting error:', error);
    res.status(500).json({ error: 'Minting failed', details: error.message });
  }
});

module.exports = router;
