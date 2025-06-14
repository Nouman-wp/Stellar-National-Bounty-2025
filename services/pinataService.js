const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

async function uploadFileToPinata(filePath, fileName) {
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));

  form.append(
    "pinataMetadata",
    JSON.stringify({
      name: fileName,
    })
  );

  const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", form, {
    maxBodyLength: Infinity,
    headers: {
      ...form.getHeaders(),
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_API_KEY,
    },
  });

  return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
}

async function uploadJSONToPinata(jsonBody, name) {
  const res = await axios.post(
    "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    jsonBody,
    {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    }
  );

  return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
}

module.exports = {
  uploadFileToPinata,
  uploadJSONToPinata,
};
