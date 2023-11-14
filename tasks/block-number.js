const { task } = require("hardhat/config")

 // name, description in parameters
task("block-number", "Prints the current block number").setAction(    
  // const blockTask = async function() => {}
  // async function blockTask() {}
  //   anonymous fn in javascript as it doesn't have a name 
   async (taskArgs, hre) => {
      const blockNumber = await hre.ethers.provider.getBlockNumber();
      console.log(`Current block number: ${blockNumber}`);
   }
) 

module.exports = {}