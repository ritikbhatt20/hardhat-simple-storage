// we are importing hardhat and not ethers bcz because ethers doesn't know about this contracts folder and doesn't know that contract is compiled but hardhat knows about this
const { ethers, run, network } = require("hardhat");

async function main() {
  
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment(1);
  console.log(`Deployed contract to: ${simpleStorage.target}`);

  // console.log(network.config);

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current Value is: ${currentValue}`);
  // Update the current value 
  const transactionResponse = await simpleStorage.store("7");
  // wait for the creation of one block 
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Value is: ${updatedValue}`);

}
// A new function to verify our contract
async function verify(contractAddress, args) {

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
