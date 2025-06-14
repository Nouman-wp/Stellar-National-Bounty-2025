const express = require('express');
const router = express.Router();

// POST /auth/login - store wallet
router.post('/login', (req, res) => {
  const { wallet } = req.body;
  if (!wallet) return res.status(400).send("Wallet address required");
  req.session.wallet = wallet.toLowerCase(); // ✅ stores wallet in session
  res.send({ message: "Logged in", wallet });
});
// GET /auth/logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout error");
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

// GET /auth/session
router.get('/session', (req, res) => {
  if (req.session.wallet) {
    res.send({ loggedIn: true, wallet: req.session.wallet });
  } else {
    res.send({ loggedIn: false });
  }
});

module.exports = router;
