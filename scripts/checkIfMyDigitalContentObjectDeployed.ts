import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractAt("MyDigitalContentObject", "");
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
