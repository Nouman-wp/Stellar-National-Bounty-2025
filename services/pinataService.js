// services/pinata.js
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

const uploadImageToIPFS = async (imagePath) => {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(imagePath));

  const metadata = JSON.stringify({ name: path.basename(imagePath) });
  formData.append("pinataMetadata", metadata);

  const response = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    formData,
    {
      maxContentLength: "Infinity",
      headers: {
        ...formData.getHeaders(),
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    }
  );

  return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
};

const uploadMetadataToIPFS = async (metadata) => {
  const response = await axios.post(
    "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    metadata,
    {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    }
  );

  return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
};

module.exports = {
  uploadImageToIPFS,
  uploadMetadataToIPFS,
};
