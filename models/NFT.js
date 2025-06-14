// models/NFT.js
const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String, // ✅ Add this
  metadataUrl: String, // ✅ Add this
  tokenId: Number,
  owner: String,
  rarity: String,
  forSale: { type: Boolean, default: false },
  price: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model("NFT", NFTSchema);
