import LNBits from "lnbits";
import {rskSendFunds} from "./web3-util";
const { wallet } = LNBits({
    adminKey: process.env.LNBITS_ADMIN_KEY,
    invoiceReadKey: process.env.LNBITS_INVOICE_READ_KEY,
    endpoint: process.env.LNBITS_URL, //default
});

export async function lightningSendFunds(address : string, amount : number){
    // TODO add lnbits api
    console.log("sending funds to: " + address)
    const ethers = require('ethers');
    response.then(data => {
        console.log("Funds sent in: " + data.transactionHash);
    })
}

export async function checkPayment(payment_hash : string){
    let response = await wallet.checkInvoice({payment_hash: payment_hash });
    return response['paid'];
}

export async function waitForPaymentAndSendFunds(newInvoice, address, amount) {
    let success = false;
    let timerId = setInterval(async function () {
        console.log("Checking payment for: " + newInvoice.payment_hash)
        let response = await wallet.checkInvoice({payment_hash: newInvoice.payment_hash})
        if (response['paid'] == true) {
            clearInterval(timerId);
            success = true;
            console.log("Payment received for: " + newInvoice.payment_hash)
            await rskSendFunds(address, amount * 10000000000);
        }
    }, 10000)

    setTimeout(() => {
        if (success) {
            console.log("interval already cleared");
        } else {
            clearInterval(timerId);
            console.log("No payment for: " + newInvoice.payment_hash);
        }
    }, 100000);
}

export async function createInvoice(amount: number, rskAddress: string){
    await wallet.createInvoice({
        amount: amount,
        memo: rskAddress,
        out: false,
    });
}