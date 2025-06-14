// client/js/uploadAnimeNFTs.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const NFT = require('../models/NFT');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const baseDir = path.join(__dirname, '../anime_nfts');
const imageBaseUrl = "https://your-cdn-url.com/anime_nfts"; // Upload images to Cloudinary, IPFS, or static host

(async () => {
  const collections = fs.readdirSync(baseDir);

  for (const folder of collections) {
    const files = fs.readdirSync(path.join(baseDir, folder));
    
    for (const file of files) {
      const imageUrl = `${imageBaseUrl}/${folder}/${file}`;
      const name = file.split('.')[0];
      
      await NFT.create({
        name: `#${name} - ${folder}`,
        description: `${name} from ${folder}`,
        imageUrl,
        tokenId: Date.now(),
        collection: folder,
        price: Math.floor(Math.random() * 5) + 1,
        forSale: true
      });

      console.log(`✅ Uploaded ${name} from ${folder}`);
    }
  }

  console.log("🎉 All NFTs uploaded!");
  mongoose.disconnect();
})();
