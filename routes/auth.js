const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { walletAddress } = req.body;
  if (!walletAddress) return res.status(400).json({ error: "Missing wallet address" });

  try {
    let user = await User.findOne({ walletAddress });

    if (!user) {
      // New user
      user = await User.create({ walletAddress });
    }

    // Save in session
    req.session.walletAddress = user.walletAddress;
    req.session.user = {
      _id: user._id,
      walletAddress: user.walletAddress,
      xp: user.xp,
    };

    res.json({ message: "Logged in", redirectToDashboard: true });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
