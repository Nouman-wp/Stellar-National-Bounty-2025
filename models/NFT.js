// models/NFT.js
// const mongoose = require("mongoose");

// const NFTSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   imageUrl: String, // ✅ Add this
//   metadataUrl: String, // ✅ Add this
//   tokenId: Number,
//   owner: String,
//   rarity: String,
//   price: {
//   type: Number,
//   default: 0
// },
// forSale: {
//   type: Boolean,
//   default: true
// },
// nftcollection: {
//   type: String,
//   default: 'Uncategorized'
// },
//   createdAt: { type: Date, default: Date.now },
// });


// module.exports = mongoose.model("NFT", NFTSchema);

const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
  name: String,
  description: String,
  tokenId: Number,
  owner: String,
  rarity: String,
  price: Number,
  collection: String,
  imageUrl: String,
  metadataUri: String,
  txHash: String,
}, { timestamps: true });

module.exports = mongoose.model("NFT", nftSchema);

