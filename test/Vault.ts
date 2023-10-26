import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("Vault", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployVaultFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const vault = await hre.viem.deployContract("Vault");

    const publicClient = await hre.viem.getPublicClient();

    return {
      vault,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { vault, owner } = await loadFixture(deployVaultFixture);

      expect(await vault.read.owner()).to.equal(
        getAddress(owner.account.address)
      );
    });
  });

  describe("getPII", function () {
    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const { vault, publicClient } = await loadFixture(deployVaultFixture);
      });
    });
  });
});
