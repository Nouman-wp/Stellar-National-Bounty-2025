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
````

Output → `target/wasm32-unknown-unknown/release/aniverse_contract.wasm`

### 3️⃣ Deployment

```powershell
soroban contract deploy `
  --wasm target/wasm32-unknown-unknown/release/aniverse_contract.wasm `
  --source my_wallet `
  --network-passphrase "Test SDF Network ;" `
  --rpc-url https://soroban-testnet.stellar.org
```

### 4️⃣ Minting Example

```powershell
soroban contract invoke `
  --id CONTRACT_ID `
  --source my_wallet `
  --rpc-url https://soroban-testnet.stellar.org `
  --network-passphrase "Test SDF Network ;" `
  -- mint --to GABC...XYZ --token_id 1 --uri "ipfs://QmPinataHash"
```

### 5️⃣ Ownership Check

```powershell
soroban contract invoke `
  --id CONTRACT_ID `
  --source my_wallet `
  --rpc-url https://soroban-testnet.stellar.org `
  --network-passphrase "Test SDF Network ;" `
  -- owner_of --token_id 1
```

---

## 🌐 Deployment Flow

1. **Wallet Setup**

   * Install Freighter Wallet
   * Fund testnet wallet via Stellar Faucet
   * Import CLI-generated keys

2. **Smart Contract**

   * Write → Compile → Deploy via Soroban CLI

3. **Storage**

   * Upload artwork → Pinata → get IPFS CID
   * Attach CID as `metadata_uri`

4. **Backend + DB**

   * Node.js + Express server for APIs
   * MongoDB stores users, NFTs, collections

5. **Frontend**

   * EJS + TailwindCSS templates
   * NFT minting form, marketplace, profile

6. **Integration**

   * Freighter Wallet ↔ Stellar
   * Marketplace invokes Soroban contracts

---

## 📦 Installation & Setup

### Prerequisites

* Node.js + npm
* Rust + Cargo
* Soroban CLI
* Freighter Wallet
* MongoDB

### Install Project

```bash
# Backend
npm install

# Soroban CLI
cargo install --locked soroban-cli
```

### Run Local Dev

```bash
npm run dev
```

---

## 🎯 Hackathon Scope

✅ End-to-end NFT lifecycle → Mint → Trade → Showcase
✅ Anime-first NFT marketplace experience
✅ Gamified quests & play-to-earn NFT unlocks
✅ Deployed Soroban smart contracts on Stellar testnet
✅ Fully integrated Freighter Wallet + IPFS storage

---

## 🌟 Why Aniverse?

* ⚡ **Decentralized & Transparent** → Stellar + Soroban power
* 🎨 **Anime Culture Meets Blockchain** → First anime NFT hub
* 🎮 **Gamified Ownership** → Earn NFTs via challenges
* 🤝 **Community Focused** → Built for fans, collectors & gamers

---

##  Future Roadmap

* [ ] Multi-chain NFT support (Stellar + Polygon + Solana)
* [ ] DAO governance for anime creators & fans
* [ ] Cross-game NFT interoperability
* [ ] Mobile-first NFT minting & marketplace

---

## License

MIT License © 2025 — **Team Notion**


Do you want me to also add a **badges row** at the top (like build status, tech used, license, etc.) to make it look more professional for GitHub judges?
```
