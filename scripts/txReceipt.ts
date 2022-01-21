import { ethers } from "hardhat";

async function main() {
  const txReceipt = await ethers.provider.getTransactionReceipt(
    "0xf2a6e39e9f9cd18dfdf87a35a5154a1c3738c02a664defddd31f13a61716dc7d"
  );
  console.log(txReceipt);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
