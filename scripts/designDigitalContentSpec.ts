import { ethers } from "hardhat";
import { kmsSigner } from "../common";

async function main() {
  const signer = kmsSigner();
  const contract = await ethers.getContractAt(
    "MyDigitalContentObject",
    "0xeE2664b2eF43CA62bB042f7C72B43A78793d195F"
  );
  console.log(
    await contract
      .connect(signer)
      .design("", "", 0, "", 0, "", [], [], [], true, {
        gasPrice: 0,
      })
  );
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
