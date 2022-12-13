require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = "hiYXxb5r_h8osEyRbMOWJ5rz5JbXW5dt";
const GOERLI_PRIVATE_KEY = "0b6570e9440d7d1277d95d42487f9475c27c9a500c5d092b1d173aa479db3497";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
