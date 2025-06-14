const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { mintNFT } = require("../controllers/mintController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.post("/", upload.single("nftImage"), mintNFT);

module.exports = router;
