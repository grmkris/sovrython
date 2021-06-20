const Web3 = require('web3');

export let web3Mainnet = new Web3(
  new Web3.providers.HttpProvider('https://public-node.rsk.co'),
);
export let web3Testnet = new Web3(
  new Web3.providers.HttpProvider('https://public-node.testnet.rsk.co'),
);
