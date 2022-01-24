import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { MyDigitalContentObject } from "../typechain/MyDigitalContentObject";

let myDigitalContentObject: MyDigitalContentObject;

let addr1: Signer;
// let addr2: Signer;

describe("MyDigitalContentObject", function () {
  beforeEach(async () => {
    const signers = await ethers.getSigners();
    addr1 = signers[1];
    // addr2 = signers[2];
    const MyDigitalContentObject = await ethers.getContractFactory(
      "MyDigitalContentObject"
    );
    myDigitalContentObject = await MyDigitalContentObject.connect(
      addr1
    ).deploy();
    await myDigitalContentObject.deployed();
    await myDigitalContentObject.design(
      "",
      "",
      0,
      "http://example.com",
      0,
      "",
      [],
      [],
      [],
      true
    );
  });

  it("Should mint success", async function () {
    const signers = await ethers.getSigners();
    addr1 = signers[1];
    const addr1Address = await addr1.getAddress();
    await myDigitalContentObject.design(
      "",
      "",
      0,
      "http://example.com",
      0,
      "",
      [],
      [],
      [],
      true
    );
    await myDigitalContentObject.mint(
      addr1Address,
      1,
      "http://example.com",
      ""
    );
    expect(await myDigitalContentObject.objectBalanceOf(addr1Address)).to.equal(
      1
    );
  });

  // it("Should safeTransfer success", async function () {
  //   const addr1Address = await addr1.getAddress();
  //   const addr2Address = await addr2.getAddress();
  //   await myDigitalContentObject.connect(addr2).mint(addr2Address, 1, 1);
  //   await myDigitalContentObject
  //     .connect(addr2)
  //     .setApprovalForAll(addr1Address, true);
  //   await myDigitalContentObject
  //     .connect(addr1)
  //     .safeTransferFrom(addr2Address, addr1Address, 1, 1, []);
  //   expect(await myDigitalContentObject.balanceOf(addr1Address, 1)).to.equal(1);
  // });
});
