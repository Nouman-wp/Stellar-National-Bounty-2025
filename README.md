# 🌌 Aniverse NFT Platform

> 🚀 Anime meets Web3 → A decentralized NFT marketplace & gamified ecosystem built on **Stellar + Soroban**  

---

## 🎥 Project Demo  

[![Watch the Demo](https://img.youtube.com/vi/j-cBZDv13QA/maxresdefault.jpg)](https://www.youtube.com/watch?v=j-cBZDv13QA)  
*Click thumbnail to watch the full demo!*

---

## 📖 Overview  

**Aniverse NFT Platform** is a decentralized anime-themed NFT marketplace powered by **Stellar Blockchain** & **Soroban smart contracts**.  

- 🎨 Mint anime-inspired NFTs with on-chain metadata  
- 🛒 Trade in a fully decentralized marketplace  
- 🎮 Unlock exclusive NFTs via **play-to-earn quests**  
- 👤 Showcase collections in rich player profiles  

Built for **anime fans, collectors, and gamers**, it blends culture + blockchain into a community-first NFT ecosystem.  

---

## 🖼️ Platform Screenshots  

### 🏠 Home  
![Home](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20052740.png?updatedAt=1756166293584)  

### 🛒 Marketplace  
![Marketplace](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20052942.png?updatedAt=1756166404294)  

### 🎨 NFT Detail  
![NFT Detail](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20053148.png?updatedAt=1756166531039)  

### 👤 Profile  
![Profile](https://ik.imagekit.io/jv5oqzl31y/Screenshot%202025-08-26%20053335.png?updatedAt=1756166631790)  

---

## 🛠️ Tech Stack  

**Blockchain Layer** → Stellar + Soroban SDK  
**Smart Contracts** → Rust (NFT + marketplace contracts)  
**Storage** → Pinata (IPFS decentralized storage)  
**Wallet** → Freighter Wallet integration  
**Backend** → Node.js + Express  
**Frontend** → EJS Templates + TailwindCSS  
**Database** → MongoDB (marketplace metadata, users, collections)  

---

## 🎮 Core Features  

### 🔹 NFT Minting  
- Upload anime artwork → Mint directly to Stellar  
- Metadata & media stored via **Pinata IPFS**  
- On-chain proof of ownership  

### 🔹 Marketplace Trading  
- Explore anime NFT collections  
- Buy/sell NFTs via **Soroban smart contracts**  
- Live price updates + bidding system  

### 🔹 Gamification  
- Complete quests → Earn exclusive NFTs  
- Play-to-earn mechanics  
- In-game achievements minted as NFTs  

### 🔹 Player Profiles & Leaderboard  
- Showcase owned NFTs & collections  
- Track quest completions  
- Global leaderboard for top collectors  

---

## 🔗 Smart Contract Workflow  

### 1️⃣ Contract Setup  
- Written in **Rust** using Soroban SDK  
- Functions:  
  - `mint(token_id, owner, metadata_uri)`  
  - `transfer(token_id, from, to)`  
  - `owner_of(token_id)`  

### 2️⃣ Compilation  
```bash
cargo build --target wasm32-unknown-unknown --release
