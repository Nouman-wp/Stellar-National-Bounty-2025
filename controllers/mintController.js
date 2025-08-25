const pinataService = require('../services/pinataService');
const blockchainService = require('../services/blockchainService');
const NFT = require('../models/NFT');
const fs = require('fs');

exports.handleMint = async (req, res) => {
  try {
    const { name, description, tokenId, owner, rarity, price, nftcollection } = req.body;
    const imagePath = req.file.path;

    // Upload image to Pinata
    const imageIPFS = await pinataService.uploadImageToIPFS(imagePath);

    // Prepare metadata
    const metadata = {
      name,
      description,
      image: imageIPFS,
      attributes: [
        { trait_type: 'Rarity', value: rarity },
        { trait_type: 'Collection', value: nftcollection },
      ],
    };

    // Upload metadata to Pinata
    const metadataURI = await pinataService.uploadJSONToIPFS(metadata);

    // Save to DB
    const newNFT = new NFT({
      tokenId,
      name,
      description,
      owner,
      rarity,
      price,
      collection: nftcollection,
      image: imageIPFS,
      metadataURI
    });
    await newNFT.save();

    // Mint on Stellar Network
    await blockchainService.mintNFT(owner, tokenId, metadataURI);

    res.redirect('/marketplace');
  } catch (err) {
    console.error('Minting failed:', err);
    res.status(500).send('Minting failed.');
  }
};
