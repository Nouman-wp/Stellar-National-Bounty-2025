// models/Bet.js
const mongoose = require("mongoose");

const BetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  nft: { type: mongoose.Schema.Types.ObjectId, ref: "NFT" },
  matchId: String, // ID of the event/game
  teamChosen: String,
  betAmount: Number,
  result: { type: String, enum: ["win", "lose", "pending"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bet", BetSchema);
