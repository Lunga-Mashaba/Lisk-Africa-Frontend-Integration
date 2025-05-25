🎨 Token-Powered NFT Platform

A Reward System for Creators
This project is a decentralized application (dApp) that empowers digital creators by combining NFTs (ERC721) with a custom reward token (ERC20). Every time an NFT is minted, the original creator receives a token reward, creating a sustainable incentive for content creation.

📌 Features

✅ Smart Contracts (Solidity)
ERC20 Token: CreatorToken
Custom reward token for creators
Mintable only by the contract
Rewarded to creators upon NFT minting
ERC721 NFT Collection: ArtNFT
Anyone can mint NFTs with metadata URI
Each NFT stores the creator's address
Emits an event on mint
Triggers a reward to the NFT's creator in CreatorToken
🔧 Smart Contract Details

CreatorToken (ERC20)
Minting: Internal (only callable by the contract)
Functions:
rewardCreator(address to, uint256 amount)
balanceOf, transfer, approve, transferFrom, allowance (standard ERC20)
ArtNFT (ERC721)
Minting: Open to all users via mintNFT(string memory tokenURI)
On Mint:
Stores creator’s address
Emits mint event
Calls rewardCreator to reward the creator with ERC20 tokens
🌐 Frontend (React + Web3)

Features
Wallet & Contract Integration
Connect with MetaMask
Display wallet address and balances for both ERC20 and ERC721
NFT Minting Form
Upload image and metadata to IPFS (e.g., via Pinata or NFT.Storage)
Call smart contract to mint NFT
Show transaction confirmation + hash
Reward Dashboard
View current ERC20 token balance
Display a table/log of NFT mints with rewards (via event logs)
NFT Gallery
List all minted NFTs with:
Token metadata
Creator address
Token ID

🚀 Deployment
💻 Smart Contracts
Network: Lisk Sepolia Testnet
Contracts Deployed: ArtNFT, CreatorToken
🌍 Frontend
Framework: React
Deployment: Netlify or Vercel

📁 Project Structure:
/contracts        → Solidity smart contracts
/src              → Frontend React app
  /components     → UI components
  /utils          → Web3 & contract interactions
/scripts          → Deployment scripts
README.md
✅ Deliverables

 Smart Contracts deployed to Lisk Sepolia
 React Frontend deployed to Netlify or Vercel
 GitHub Repository with full source code (contracts + frontend)
 
🛠 Tech Stack:
Solidity (Smart Contracts)
OpenZeppelin (ERC20 & ERC721 Standards)
Hardhat (Development & Testing)
React (Frontend UI)
Web3.js or Ethers.js (Blockchain Interaction)
IPFS via Pinata or NFT.Storage (NFT Metadata)
MetaMask (Wallet Connection)

🧠 Learning Objectives:
-Understand ERC20 & ERC721 token standards
-Integrate smart contracts with a React frontend
-Upload and use IPFS-hosted metadata
-Work with Ethereum-compatible testnets
-Implement event-driven UIs from blockchain events
