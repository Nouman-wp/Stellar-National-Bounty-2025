// routes/redeem.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const NFT = require("../models/NFT");
const Redeem = require("../models/redeem");

const NFT_REDEEM_COST = 100; // XP required per NFT

// GET Redeem Page
router.get("/", async (req, res) => {
  const walletAddress = req.query.wallet || null;

  let availableNFTs = await NFT.find({ forSale: false });
  let user = walletAddress ? await User.findOne({ walletAddress }) : null;

  res.render("pages/redeem", {
    nfts: availableNFTs,
    userXP: user ? user.xp : 0,
    wallet: walletAddress,
    message: null,
  });
});

// POST Redeem NFT
router.post("/claim", async (req, res) => {
  const { walletAddress, nftId } = req.body;

  const user = await User.findOne({ walletAddress });
  const nft = await NFT.findById(nftId);

  if (!user || !nft) return res.status(404).send("Invalid user or NFT");

  if (user.xp < NFT_REDEEM_COST) {
    return res.send("Not enough XP to redeem this NFT.");
  }

  user.xp -= NFT_REDEEM_COST;
  user.nftsOwned.push(nft._id);

  nft.owner = walletAddress;
  nft.forSale = false;

  await Promise.all([
    user.save(),
    nft.save(),
    Redeem.create({ user: user._id, nft: nft._id, xpSpent: NFT_REDEEM_COST }),
  ]);

  res.redirect(`/redeem?wallet=${walletAddress}`);
});

module.exports = router;
