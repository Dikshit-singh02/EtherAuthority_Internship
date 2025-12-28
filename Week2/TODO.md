## 1. Set Up Backend Structure
- [ ] Create `Week2/backend/` folder with Express server setup (package.json, server.js).
- [ ] Install dependencies: express, mongoose, dotenv, ethers, cors, etc.
- [ ] Set up MongoDB connection and define 3 Mongoose models (InternProfile, TaskTracking, NFTRecord).

## 2. Implement REST APIs
- [ ] Intern Registration API: POST endpoint to create intern profile in DB.
- [ ] Task Submission API: POST endpoint to submit tasks and update DB.
- [ ] Token Minting API: POST endpoint to mint ERC20/ERC721 tokens via ethers.js, log to DB.

## 3. Blockchain Integration
- [ ] Configure ethers.js in backend to connect to Sepolia (use .env for RPC URL, private key, contract ABIs/addresses).
- [ ] Implement minting logic in Token Minting API (call contract.mint() or mintNFT()).

## 4. Set Up Frontend Structure
- [ ] Create `Week2/frontend/` folder with Vite + React setup.
- [ ] Install dependencies: react, vite, axios, ethers, etc.
- [ ] Build NFT Certificate Issuer DApp components (forms for registration/submission, NFT display).

## 5. Frontend-Backend Integration
- [ ] Use Axios in React to call backend APIs.
- [ ] Implement wallet connection (MetaMask) for user address.
- [ ] Display minted NFTs (fetch from backend or blockchain).

## 6. Configuration and Documentation
- [ ] Create .env.example with required variables.
- [ ] Update README.md with full folder structure, how to run backend/frontend, and system overview.
- [ ] Ensure all code is functional and tested (e.g., API calls work, minting succeeds).

## 7. Testing and Finalization
- [ ] Test end-to-end flow: Register intern → Submit task → Mint NFT → Display in DApp.
- [ ] Handle errors (e.g., invalid wallet, mint failures).
- [ ] Ensure code follows best practices (e.g., async/await, error handling).
=======
# Week-2 Project TODO List

## 1. Set Up Backend Structure
- [x] Create `Week2/backend/` folder with Express server setup (package.json, server.js).
- [x] Install dependencies: express, mongoose, dotenv, ethers, cors, etc.
- [x] Set up MongoDB connection and define 3 Mongoose models (InternProfile, TaskTracking, NFTRecord).

## 2. Implement REST APIs
- [x] Intern Registration API: POST endpoint to create intern profile in DB.
- [x] Task Submission API: POST endpoint to submit tasks and update DB.
- [x] Token Minting API: POST endpoint to mint ERC20/ERC721 tokens via ethers.js, log to DB.

## 3. Blockchain Integration
- [x] Configure ethers.js in backend to connect to Sepolia (use .env for RPC URL, private key, contract ABIs/addresses).
- [x] Implement minting logic in Token Minting API (call contract.mint() or mintNFT()).

## 4. Set Up Frontend Structure
- [x] Create `Week2/frontend/` folder with Vite + React setup.
- [x] Install dependencies: react, vite, axios, ethers, etc.
- [x] Build NFT Certificate Issuer DApp components (forms for registration/submission, NFT display).

## 5. Frontend-Backend Integration
- [x] Use Axios in React to call backend APIs.
- [x] Implement wallet connection (MetaMask) for user address.
- [x] Display minted NFTs (fetch from backend or blockchain).

## 6. Configuration and Documentation
- [x] Create .env.example with required variables.
- [x] Update README.md with full folder structure, how to run backend/frontend, and system overview.
- [x] Ensure all code is functional and tested (e.g., API calls work, minting succeeds).

## 7. Testing and Finalization
- [ ] Test end-to-end flow: Register intern → Submit task → Mint NFT → Display in DApp.
- [ ] Handle errors (e.g., invalid wallet, mint failures).
- [ ] Ensure code follows best practices (e.g., async/await, error handling).
