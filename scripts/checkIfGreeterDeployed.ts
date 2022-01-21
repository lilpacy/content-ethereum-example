import { ethers } from "hardhat";
import { kmsSigner } from "../common";

async function main() {
  const contract = await ethers.getContractAt(
    "Greeter",
    "0x113Ce7AC44C61F5aeafbD5a9C6a71CF135e61C2d"
  );
  const result = await contract.greet();
  console.log(result);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
