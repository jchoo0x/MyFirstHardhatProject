require("@nomiclabs/hardhat-waffle");


const ALCHEMY_API_KEY = "bOiqW3kv5teBTA8kq9pt04avcAhl7TUT";

const RINKEBY_PRIVATE_KEY = "31d31d050c7bc7df057a9ccf6c2ff545a14ba6fa4f668c1bb5cb7cf373f4f6ae"
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
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
