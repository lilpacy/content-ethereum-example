import { ethers } from "hardhat";
import { kmsSigner } from "../common";

async function main() {
  const signer = kmsSigner();
  const addr1 = await signer.getAddress();
  const contract = await ethers.getContractAt(
    "MyDigitalContentObject",
    "0xeE2664b2eF43CA62bB042f7C72B43A78793d195F"
  );
  // const balance = await contract.specIdOf(1, {
  //   gasLimit: "0x47B760",
  //   gasPrice: 0,
  // });
  const balance = await contract.objectBalanceOf(addr1);
  console.log(balance);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
