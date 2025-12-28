# EtherAuthority Internship Week-2 Tasks TODO List

## 1. Backend Setup
- [x] Verify and update MongoDB schemas in models/
  - [x] InternProfile.js - Complete schema with all fields
  - [x] TaskTracking.js - Complete schema with all fields
  - [x] NFTRecord.js - Complete schema with all fields
- [x] Update server.js
  - [x] Connect MongoDB
  - [x] Enable CORS
  - [x] Load all routes
- [x] Implement Express routes
  - [x] intern.js - POST /register endpoint
  - [x] task.js - POST /submit endpoint
  - [x] token.js - POST /mint-nft endpoint with ethers.js integration

## 2. Frontend Implementation
- [x] Update App.jsx with full DApp functionality
  - [x] Connect MetaMask wallet
  - [x] Register intern form
  - [x] Submit task form
  - [x] Mint NFT functionality
  - [x] Display minted NFTs
  - [x] Error handling and loading states
- [x] Ensure axios integration for API calls

## 3. Blockchain Integration
- [x] Configure ethers.js for CertificateNFT.sol interaction
  - [x] Implement NFT minting logic in backend

## 4. Configuration and Documentation
- [x] Create/update .env.example
- [x] Update README.md with setup instructions
- [x] Test end-to-end functionality

## 5. Testing and Finalization
- [ ] Test backend APIs
- [ ] Test frontend interactions
- [ ] Test wallet connection
- [ ] Test NFT minting flow
- [ ] Handle errors and edge cases
