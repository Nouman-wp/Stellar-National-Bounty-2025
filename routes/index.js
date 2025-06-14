const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const User = require("../models/User");
const NFT = require("../models/NFT");
const GameResult = require("../models/GameResult");

const { uploadImageToIPFS, uploadMetadataToIPFS } = require("../services/pinataService");

// --- Home ---
router.get("/", (req, res) => {
  res.render("pages/home");
});

// --- Mint Page ---
router.get("/mint", (req, res) => {
  res.render("pages/mint");
});

// --- Admin Page ---
router.get("/admin", (req, res) => {
  res.render("pages/admin");
});

// --- Redeem Page ---
router.get("/redeem", (req, res) => {
  res.render("pages/redeem");
});

// --- Betting Page ---
router.get("/betting", (req, res) => {
  res.render("pages/betting");
});

// --- Gamezone Page ---
router.get("/gamezone", (req, res) => {
  res.render("pages/gamezone");
});

// --- Marketplace Page ---
router.get("/marketplace", (req, res) => {
  res.render("pages/marketplace");
});

// --- Dashboard Page (Fixed & Working) ---
const { ensureWallet } = require("../middlewares/auth");

router.get("/dashboard", ensureWallet, async (req, res) => {
  try {
    const wallet = req.session.wallet.toLowerCase();
    const user = await User.findOne({ walletAddress: wallet }).populate("nftsOwned");
    if (!user) return res.redirect("/");

    const results = await GameResult.find({ user: user._id }).sort({ timestamp: -1 });

    const monadBalance = 100 + Math.floor(user.xp / 10); // dummy logic

    res.render("pages/dashboard", {
      user,
      results,
      monadBalance,
    });
  } catch (err) {
    console.error("Dashboard Error:", err);
    res.status(500).send("Failed to load dashboard");
  }
});

// --- NFT Upload & Minting ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.post("/mint", upload.single("nftImage"), async (req, res) => {
  const { name, description, tokenId, owner } = req.body;

  try {
    const imageUrl = await uploadImageToIPFS(req.file.path);

    const metadata = {
      name,
      description,
      image: imageUrl,
    };

    const metadataUrl = await uploadMetadataToIPFS(metadata);

    const newNFT = new NFT({
      name,
      description,
      imageUrl,
      tokenId,
      owner,
      metadataUrl,
    });

    await newNFT.save();
    res.redirect("/marketplace");
  } catch (err) {
    console.error("❌ Error minting NFT:", err);
    res.status(500).send("Failed to mint NFT");
  }
});

module.exports = router;
