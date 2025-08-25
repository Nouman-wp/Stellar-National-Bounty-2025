const express = require('express');
const router = express.Router();
const multer = require('multer');
const mintController = require('../controllers/mintController');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('nftImage'), mintController.handleMint);

module.exports = router;
