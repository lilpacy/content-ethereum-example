// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { kmsSigner } from "../common";
import { waffle } from "hardhat";
import * as hre from "hardhat";
const MyDigitalContentObject = require("../artifacts/contracts/MyDigitalContentObject.sol/MyDigitalContentObject.json");
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
  const myDigitalContentObject = await deployContract(
    signer,
    MyDigitalContentObject,
    [],
    {
      gasLimit: "0x47B760",
      gasPrice: 0,
    }
  );

  console.log(
    "MyDigitalContentObject deployed to:",
    myDigitalContentObject.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
