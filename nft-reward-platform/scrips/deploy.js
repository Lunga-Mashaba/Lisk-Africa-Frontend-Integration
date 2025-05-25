// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const CreatorToken = await hre.ethers.getContractFactory("CreatorToken");
  const creatorToken = await CreatorToken.deploy();
  await creatorToken.deployed();
  console.log("CreatorToken deployed at:", creatorToken.address);

  const ArtNFT = await hre.ethers.getContractFactory("ArtNFT");
  const artNFT = await ArtNFT.deploy(creatorToken.address);
  await artNFT.deployed();
  console.log("ArtNFT deployed at:", artNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
