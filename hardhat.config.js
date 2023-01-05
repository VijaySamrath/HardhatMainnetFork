require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: 'https://eth-mainnet.g.alchemy.com/v2/m6b2E_VVRqVPiqI4fO0nSpryhK7ngnYn',
      },
      chainId: 1,
    }
  }
};
