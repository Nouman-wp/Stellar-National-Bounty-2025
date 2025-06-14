// models/GameResult.js
const mongoose = require("mongoose");

const GameResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  gameName: String,
  score: Number,
  xpEarned: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GameResult", GameResultSchema);
