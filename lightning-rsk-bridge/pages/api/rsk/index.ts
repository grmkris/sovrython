import {NextApiRequest, NextApiResponse} from 'next'
import LNBits from 'lnbits';
import {rskSendFunds} from "../../../utils/web3-util";

const {wallet} = LNBits({
    adminKey: process.env.LNBITS_ADMIN_KEY,
    invoiceReadKey: process.env.LNBITS_INVOICE_READ_KEY,
    endpoint: process.env.LNBITS_URL, //default
});

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = JSON.parse(_req.body)
        const amount = body['amount']
        const address = body['address']

        const newInvoice = await wallet.createInvoice({
            amount: amount,
            memo: address,
            out: false,
        });

        console.log(newInvoice);
        checkPayment(newInvoice, address, amount).then();
        res.status(200).json(newInvoice);
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}

async function checkPayment(newInvoice, address, amount) {
    // TODO rewrite to check rsk payment
    let success = false;
    let timerId = setInterval(async function () {
        console.log("Checking payment for: " + newInvoice.payment_hash)
        let response = await wallet.checkInvoice({payment_hash: newInvoice.payment_hash})
        if (response['paid'] == true) {
            clearInterval(timerId);
            success = true;
            console.log("Payment received for: " + newInvoice.payment_hash)
            lightningSendFunds(address, amount * 10000000000);
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


export default handler
