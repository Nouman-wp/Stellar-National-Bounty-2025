# 🌌 Aniverse NFT Platform

🎥 **Project Demo Video** Click the image below

[![Watch the video](https://img.youtube.com/vi/j-cBZDv13QA/maxresdefault.jpg)](https://www.youtube.com/watch?v=j-cBZDv13QA)


---

## 📖 Overview  

**Aniverse NFT Platform** is a decentralized anime-themed NFT marketplace built on the **Stellar Blockchain** using the **Soroban SDK** and **Rust-based smart contracts**.  
NFTs are minted, traded, and showcased with full on-chain transparency. Storage is powered by **Pinata IPFS**, while wallet integration is done through **Freighter Wallet** for seamless user experience.  

This platform brings anime culture into the blockchain ecosystem, offering collectors, gamers, and creators a space to **mint, trade, and engage** with anime-inspired NFTs.  

---

## 🖼️ Platform Preview  

### 🏠 Home  
![Home](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20052740.png?updatedAt=1756166293584)

---

### 🛒 Marketplace  
![Marketplace](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20052942.png?updatedAt=1756166404294)

---

### 🎨 NFT Detail  
![NFT Detail](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20053148.png?updatedAt=1756166531039)

---

### 👤 Profile  
![Profile](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20053335.png?updatedAt=1756166631790)


## 🛠️ Tech Stack  

- **Blockchain Layer:** Stellar + Soroban SDK  
- **Smart Contracts:** Rust (deployed to Stellar)  
- **Storage:** Pinata (IPFS decentralized storage)  
- **Wallet:** Freighter Wallet (Stellar wallet integration)  
- **Backend:** Node.js + Express  
- **Frontend:** EJS Templates + TailwindCSS  
- **Database:** MongoDB (for marketplace metadata, users, and collections)  

---

## 🎮 Core Features  

### 🔹 NFT Minting  
- Upload anime artwork and mint directly to Stellar.  
- Metadata + media stored via Pinata IPFS.  
- On-chain proof of ownership.  

### 🔹 Marketplace Trading  
- Browse and explore anime NFT collections.  
- Buy and sell NFTs securely through Stellar smart contracts.  
- Live price updates and bidding system.  

### 🔹 Gaming Integration  
- Complete quests and challenges to unlock **exclusive anime NFTs**.  
- Play-to-earn style gamification tied directly into the NFT ecosystem.  
- In-game achievements minted as NFTs.  

### 🔹 Player Profiles & Leaderboard  
- Showcase owned NFTs and collections.  
- Track quest completions and rewards.  
- Global leaderboard for top collectors and gamers.  

---

## 🚀 How It Works  

1. **Connect Wallet** → Log in using Freighter Wallet.  
2. **Mint NFT** → Upload anime art + metadata, minted as NFT on Stellar.  
3. **Trade & Buy** → Explore collections, buy/sell NFTs in the marketplace.  
4. **Play & Earn** → Complete in-game challenges to earn limited edition NFTs.  
5. **Showcase** → Display NFTs in your profile and climb the leaderboard.  

---

## 🌟 Why Aniverse?  

- ✅ **Decentralized & Transparent** – powered by Stellar & Soroban  
- ✅ **Anime Culture Meets Blockchain** – first-of-its-kind anime NFT marketplace  
- ✅ **Gamified Experience** – blend of NFT ownership with gaming quests  
- ✅ **Community Focused** – built for anime fans, collectors, and gamers  

---

🔗 Smart Contract Workflow
1️⃣ Contract Setup

Written in Rust using Soroban SDK.

Functions include:

mint(token_id, owner, metadata_uri)

transfer(token_id, from, to)

owner_of(token_id)

2️⃣ Compilation
cargo build --target wasm32-unknown-unknown --release


Output → target/wasm32-unknown-unknown/release/aniverse_contract.wasm

3️⃣ Deployment
soroban contract deploy `
  --wasm target/wasm32-unknown-unknown/release/aniverse_contract.wasm `
  --source my_wallet `
  --network-passphrase "Test SDF Network ;" `
  --rpc-url https://soroban-testnet.stellar.org

4️⃣ Minting Example
soroban contract invoke `
  --id CONTRACT_ID `
  --source my_wallet `
  --rpc-url https://soroban-testnet.stellar.org `
  --network-passphrase "Test SDF Network ;" `
  -- mint --to GABC...XYZ --token_id 1 --uri "ipfs://QmPinataHash"

5️⃣ Ownership Check
soroban contract invoke `
  --id CONTRACT_ID `
  --source my_wallet `
  --rpc-url https://soroban-testnet.stellar.org `
  --network-passphrase "Test SDF Network ;" `
  -- owner_of --token_id 1

🌐 Deployment Flow

Wallet Setup

Install Freighter Wallet.

Get Testnet XLM from Stellar Faucet
.

Import wallet secret from CLI-generated keys.

Smart Contract

Write → Compile → Deploy via Soroban CLI.

Storage

Upload NFT artwork → Pinata → Get IPFS CID.

Attach CID as metadata_uri.

Backend + DB

Node.js + Express server for API.

MongoDB stores users, NFTs, collections.

Frontend

EJS templates with Tailwind CSS.

NFT minting form, marketplace, profile.

Integration

Freighter Wallet connects frontend with Stellar.

Marketplace calls backend → invokes Soroban contracts.

📦 Installation & Setup
Prerequisites

Node.js + npm

Rust + Cargo

Soroban CLI

Freighter Wallet

MongoDB

Install Project
# Backend
npm install

# Soroban CLI
cargo install --locked soroban-cli

Run Local Dev
npm run dev

🎯 Hackathon Scope

✅ End-to-end NFT lifecycle: Mint → Trade → Showcase
✅ Anime-first NFT experience
✅ Gamification for community engagement
✅ Deployed Soroban smart contracts on Stellar testnet
