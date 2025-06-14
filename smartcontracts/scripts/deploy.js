const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const AnimeNFT = await hre.ethers.getContractFactory("AnimeNFT");

  // Deploy contract (deploy() now returns a deployed instance)
  const animeNFT = await AnimeNFT.deploy("AnimeNFT", "ANFT", deployer.address);

  // No need to call animeNFT.deployed()

  console.log("AnimeNFT deployed to:", animeNFT.target); // use .target to get address in ethers v6
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
