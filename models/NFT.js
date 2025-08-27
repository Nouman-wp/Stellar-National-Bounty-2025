const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
  tokenId: { type: Number, required: true, unique: true },
  name: String,
  description: String,
  owner: String,
  rarity: String,
  price: Number,
  collection: String,
  image: String,       // image IPFS link
  metadataURI: String, // metadata IPFS link
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("NFT", NFTSchema);
