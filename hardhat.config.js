require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("dotenv").config();

const GOERLI_URL_RPC = process.env.URL_RPC;
const PRIVATE_KEY_ACCOUNT = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_URL_RPC,
      accounts: [PRIVATE_KEY_ACCOUNT],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
