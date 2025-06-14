const path = require("path");
const fs = require("fs");
const NFT = require("../models/NFT");
const { uploadFileToPinata, uploadJSONToPinata } = require("../services/pinataService");
const { mintNFTOnChain } = require("../services/blockchainService");

exports.mintNFT = async (req, res) => {
  try {
    const { name, description, tokenId, owner, rarity, price, nftcollection } = req.body;
    const imagePath = req.file.path;

    // 1. Upload image to Pinata
    const imageUrl = await uploadFileToPinata(imagePath, name);

    // 2. Create metadata JSON
    const metadata = {
      name,
      description,
      image: imageUrl,
      attributes: [
        { trait_type: "Rarity", value: rarity },
        { trait_type: "Collection", value: nftcollection },
      ],
    };

    // 3. Upload metadata JSON to Pinata
    const metadataUri = await uploadJSONToPinata(metadata, `${name}-metadata`);

    // 4. Mint NFT on-chain with tokenURI = metadataUri
    const txHash = await mintNFTOnChain(owner, metadataUri);

    // 5. Save NFT info in DB
    const nft = new NFT({
      name,
      description,
      tokenId,
      owner,
      rarity,
      price: price || 0,
      collection: nftcollection,
      imageUrl,
      metadataUri,
      txHash,
    });
    await nft.save();

    // Cleanup uploaded image file
    fs.unlinkSync(imagePath);

    // Redirect to marketplace page or success page
    res.redirect("/marketplace");
  } catch (error) {
    console.error("Mint error:", error);
    res.status(500).send("Error minting NFT. Please try again.");
  }
};
