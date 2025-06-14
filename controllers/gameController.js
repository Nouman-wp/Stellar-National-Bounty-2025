const GameResult = require("../models/GameResult");
const User = require("../models/User");

exports.submitGameResult = async (req, res) => {
  try {
    const { userId, gameName } = req.body;
    const xpEarned = 50; // hardcoded for now

    const result = await GameResult.create({ userId, gameName, xpEarned });
    await User.findByIdAndUpdate(userId, { $inc: { xp: xpEarned } });

    res.json({ message: "XP earned!", xp: xpEarned });
  } catch (err) {
    console.error("Game submission error:", err);
    res.status(500).json({ error: "Game XP submission failed." });
  }
};
