// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
  username: String,
  xp: { type: Number, default: 0 },
  nftsOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
  redeemedNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
