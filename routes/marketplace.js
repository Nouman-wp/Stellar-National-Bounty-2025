// routes/marketplace.js
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Initialize with empty array until we implement NFT fetching from Stellar
    const nfts = [];
    res.render("pages/marketplace", { nfts });
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    res.status(500).render('error', { message: 'Failed to load marketplace' });
  }
});

module.exports = router;
