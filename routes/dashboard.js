// routes/dashboard.js
const express = require('express');
const router = express.Router();
// const { ensureWallet } = require('../middlewares/auth');
// const User = require('../models/User');
// const NFT = require('../models/NFT')

router.get('/', async (req, res) => {

    res.render('pages/dashboard', {
     
    });
});
module.exports = router;
