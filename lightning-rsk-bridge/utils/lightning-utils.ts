import LNBits from "lnbits";
const { wallet } = LNBits({
    adminKey: process.env.LNBITS_ADMIN_KEY,
    invoiceReadKey: process.env.LNBITS_INVOICE_READ_KEY,
    endpoint: process.env.LNBITS_URL, //default
});

// TODO add other util method (generateQR code, payment checker)

export async function lightningSendFunds(address : string, amount : number){
    // TODO add lnbits api
    console.log("sending funds to: " + address)
    const ethers = require('ethers');
    response.then(data => {
        console.log("Funds sent in: " + data.transactionHash);
    })
}