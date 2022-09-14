require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const GOERLI_URL_RPC = process.env.URL_RPC;
const PRIVATE_KEY_ACCOUNT = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_URL_RPC,
      accounts: [PRIVATE_KEY_ACCOUNT],
      chainId: 5,
    },
  },
};
