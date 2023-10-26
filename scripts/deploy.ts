import hre from "hardhat";

async function main() {
  const vault = await hre.viem.deployContract("Vault");

  console.log(`Vault deployed to ${vault.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
