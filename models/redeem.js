// models/redeem.js
const mongoose = require("mongoose");

const RedeemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  nft: { type: mongoose.Schema.Types.ObjectId, ref: "NFT" },
  xpSpent: Number,
  redeemedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Redeem", RedeemSchema);
