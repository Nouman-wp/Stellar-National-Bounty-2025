const { ethers } = require("ethers");
const contractABI = require("../smartcontracts/artifacts/contracts/AniverseNFT.sol/AniverseNFT.json").abi;

const provider = new ethers.JsonRpcProvider(process.env.MONAD_RPC);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function mintNFTOnChain(recipient, tokenURI) {
  const tx = await contract.mintNFT(recipient, tokenURI);
  await tx.wait();
  return tx.hash;
}

module.exports = {
  mintNFTOnChain,
};
