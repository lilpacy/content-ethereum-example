// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// import { ethers } from "hardhat";
import { kmsSigner } from "../common";
import { waffle } from "hardhat";
import * as hre from "hardhat";
const Greeter = require("../artifacts/contracts/Greeter.sol/Greeter.json");
const { deployContract } = waffle;

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const signer = kmsSigner();
  // const accounts = await hre.ethers.getSigners();
  // const signer = accounts[0];
  const greeter = await deployContract(signer, Greeter, ["Hello, Hardhat!"], {
    gasLimit: "0x47B760",
    gasPrice: 0,
  });
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.connect(signer).deploy("Hello World!");
  //
  // await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
