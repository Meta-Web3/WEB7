
require("@nomiclabs/hardhat-waffle");
require('hardhat-spdx-license-identifier');
let seceret =require("./secret");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks:{
    Testnet:{
      url:seceret.url,
      accounts:[seceret.key]
      
    }
 
  },
  etherscan:
  {
    apiKey:"" 
  },  
  
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
  ,
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  }
};