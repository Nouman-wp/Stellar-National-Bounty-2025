// routes/marketplace.js
const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();


// Collections page (main marketplace)
router.get("/", (req, res) => {
  res.render("pages/marketplace", { currentPage: "marketplace" });
});

// Dynamic collection route
router.get("/collection/:id", (req, res) => {
  const collectionId = req.params.id;
  const baseDir = path.join(__dirname, "..", "anime_nfts", collectionId);

  // Check if folder exists
  if (!fs.existsSync(baseDir)) {
    return res.status(404).render("error", { message: "Collection not found" });
  }

  // Read all files in that folder
  const files = fs.readdirSync(baseDir).filter(file => {
    return [".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(path.extname(file).toLowerCase());
  });

  // Prepare NFT objects
  const nfts = files.map(file => ({
    name: path.basename(file, path.extname(file)),
    image: `/anime_nfts/${collectionId}/${file}`
  }));

  res.render("pages/collection", {
    collection: { id: collectionId, name: collectionId.replace(/_/g, " ") },
    nfts,
    currentPage: "marketplace"
  });
});

module.exports = router;
