// routes/game.js
const express = require("express");
const router = express.Router();
const GameResult = require("../models/GameResult");
const User = require('../models/User');


router.get('/dashboard', async (req, res) => {
  if (!req.session.wallet) return res.redirect('/');

  const user = await User.findOne({ walletAddress: req.session.wallet }).populate('redeemedNFTs');
  const results = await GameResult.find({ user: user._id });

  res.render('pages/dashboard', { user, results });
});




// Route to render Jujutsu Arena
router.get('/jujutsu-arena', (req, res) => {
  res.render('pages/jujutsu-arena');
});

router.post("/submit", async (req, res) => {
  const { walletAddress, gameName, score } = req.body;

  try {
    let user = await User.findOne({ walletAddress });
    if (!user) {
      user = await User.create({ walletAddress });
    }

    const xpEarned = Math.floor(score / 10); // Example logic
    user.xp += xpEarned;

    const gameResult = new GameResult({
      user: user._id,
      gameName,
      score,
      xpEarned,
    });

    await gameResult.save();
    await user.save();

    res.json({ message: "XP added successfully!", xp: user.xp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Game XP logging failed" });
  }
});




module.exports = router;
