// routes/marketplace.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/marketplace"); // or correct view
});

module.exports = router;
