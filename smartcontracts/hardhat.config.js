require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    stellar: {
      url: "https://horizon-testnet.stellar.org", // Stellar testnet URL
      chainId: "testnet", // Stellar testnet
      accounts: [process.env.STELLAR_SECRET_KEY] // Load Stellar secret key from .env
    }
  }
};
