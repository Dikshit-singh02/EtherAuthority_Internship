## ⚙️ What Was Built

- ERC-20 reward tokens deployed  
- ERC-721 NFT certificate contracts  
- Certificates uploaded to IPFS  
- NFTs minted to wallet  
- Smart contracts verified on Sepolia  

---

## 🔐 Blockchain Benefits

- Immutable certificates  
- Publicly verifiable NFTs  
- Transparent reward system  
- Decentralized storage  

---

## ✅ Week-2 Completion Checklist

✔ ERC-20 Tokens  
✔ ERC-721 NFTs  
✔ IPFS Integration  
✔ Remix Deployment  
✔ Sepolia Testnet  
✔ On-chain Minting  

---

## 👨‍💻 Developer

**Dikshit Singh**  
MCA Student | Web3 & MERN Developer  
=======
# EtherAuthority Internship - Week-2 Project

## ⚙️ What Was Built

### Smart Contracts (Deployed on Sepolia)
- **ERC-20 Tokens**: InternRewardToken, TaskCompletionToken, AttendanceToken
- **ERC-721 NFTs**: CertificateNFT (with URI support for IPFS metadata)
- Smart contracts verified on Sepolia testnet
- On-chain minting functionality

### Backend (Node.js + Express)
- **REST APIs**:
  - Intern Registration API (`POST /api/intern/register`)
  - Task Submission API (`POST /api/task/submit`)
  - Token Minting API (`POST /api/token/mint`)
- **MongoDB Integration** with Mongoose:
  - InternProfile collection
  - TaskTracking collection
  - NFTRecord collection
- **Blockchain Integration**: Uses ethers.js to call mint functions on Sepolia contracts

### Frontend (Vite + React)
- **NFT Certificate Issuer DApp**:
  - MetaMask wallet connection
  - Intern registration form
  - Task submission form
  - NFT minting via backend API
  - Display minted NFTs
- Uses Axios for API calls and ethers.js for wallet integration

## 📁 Folder Structure

```
Week2/
├── smart-contracts/          # Deployed Solidity contracts
│   ├── InternRewardToken.sol
│   ├── TaskCompletionToken.sol
│   ├── AttendanceToken.sol
│   └── CertificateNFT.sol
├── backend/                  # Node.js Express server
│   ├── models/               # MongoDB schemas
│   │   ├── InternProfile.js
│   │   ├── TaskTracking.js
│   │   └── NFTRecord.js
│   ├── routes/               # API endpoints
│   │   ├── intern.js
│   │   ├── task.js
│   │   └── token.js
│   ├── server.js             # Main server file
│   ├── package.json
│   └── .env.example          # Environment variables template
├── frontend/                 # React DApp
│   ├── src/
│   │   ├── App.jsx           # Main DApp component
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── TODO.md                   # Project completion checklist
└── README.md                 # This file
```

## 🚀 How to Run

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- MetaMask wallet
- Sepolia ETH for gas fees

### Backend Setup
1. Navigate to `Week2/backend/`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your values:
   - MongoDB URI
   - Sepolia RPC URL (Infura/Alchemy)
   - Private key (from MetaMask)
   - Deployed contract addresses
4. Run: `npm run dev`

### Frontend Setup
1. Navigate to `Week2/frontend/`
2. Install dependencies: `npm install`
3. Run: `npm run dev`
4. Open browser to `http://localhost:5173`

### Usage
1. Connect MetaMask wallet
2. Register as an intern
3. Submit tasks
4. Mint certificate NFTs
5. View your NFT collection

## 🔐 Blockchain Benefits

- Immutable certificates
- Publicly verifiable NFTs
- Transparent reward system
- Decentralized storage via IPFS

## ✅ Week-2 Completion Checklist

✔ ERC-20 Tokens deployed  
✔ ERC-721 NFTs deployed  
✔ IPFS Integration  
✔ Remix Deployment  
✔ Sepolia Testnet  
✔ On-chain Minting  
✔ Node.js Backend with APIs  
✔ MongoDB Integration  
✔ React Frontend DApp  
✔ MetaMask Integration  
✔ Full-stack Web3 System  

## 👨‍💻 Developer

**Dikshit Singh**  
MCA Student | Web3 & MERN Developer
