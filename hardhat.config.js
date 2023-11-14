// const { network } = require("hardhat");

// entry point for all the scripts that we write
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number")

/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: Thanks Hardhat 
      chainId: 31337,
    }
  },
  // If we dont have our rpc url and private key, by default hardhat has a this defaultNetwork, anytime we run a script without a network, it automatically runs this fake hardhat network and it comes auto with a fake rpc url and fake private keys 
  solidity: "0.8.8",
};
