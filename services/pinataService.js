const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET = process.env.PINATA_SECRET_API_KEY;

exports.uploadImageToIPFS = async (filePath) => {
  const data = new FormData();
  data.append('file', fs.createReadStream(filePath));

  const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', data, {
    maxBodyLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET,
    }
  });

  return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
};

exports.uploadJSONToIPFS = async (jsonData) => {
  const res = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', jsonData, {
    headers: {
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET,
    }
  });

  return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
};
