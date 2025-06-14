require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    monad: {
      url: "https://testnet-rpc.monad.xyz", // ✅ Correct RPC URL
      chainId: 10143, // ✅ Optional but good to specify
      accounts: [process.env.PRIVATE_KEY] // ✅ Load from .env
    }
  }
};
