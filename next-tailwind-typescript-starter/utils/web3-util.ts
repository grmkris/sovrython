const Web3 = require('web3');

export let web3Mainnet = new Web3(
  new Web3.providers.HttpProvider('https://public-node.rsk.co'),
);
export let web3Testnet = new Web3(
  new Web3.providers.HttpProvider('https://public-node.testnet.rsk.co'),
);


//Put your mnemonic here, take care of this and don't deploy your mnemonic into production!
const mnemonic = process.env.RSK_MNEMONIC.trim()

export async function sendFunds(address : string, amount : number){
    console.log("sending funds to: " + address)
    const ethers = require('ethers');
    let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
    let account = web3Testnet.eth.accounts.wallet.add(mnemonicWallet.privateKey);
    let response = web3Testnet.eth.sendTransaction({ from:account.address,to:address, value:amount, gas:50000 });
    response.then(data => {
        console.log("Funds sent in: " + data.transactionHash);
    })
}