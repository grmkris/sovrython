const Web3 = require('web3');
const SimpleStorageContract = require('../contracts/SimpleStorage.json');

export let web3Mainnet = new Web3(
  new Web3.providers.HttpProvider('https://public-node.rsk.co'),
);
export let web3Testnet = new Web3(
  new Web3.providers.HttpProvider('https://public-node.testnet.rsk.co'),
);
export async function getSimpleStorageValue() {
  // To connect to RSK network update line 15 for one of the following providers:
  // const provider = new Web3.providers.HttpProvider("https://public-node.testnet.rsk.co");
  // const provider = new Web3.providers.HttpProvider("https://public-node.rsk.co");

  const provider = new Web3.providers.HttpProvider("https://public-node.testnet.rsk.co")
  
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = SimpleStorageContract.networks[networkId];
  const contractInstance = new web3.eth.Contract(
    SimpleStorageContract.abi,
    deployedNetwork && deployedNetwork.address);

  return await contractInstance.methods.get().call();
} 
