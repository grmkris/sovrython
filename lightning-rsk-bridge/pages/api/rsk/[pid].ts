import { NextApiRequest, NextApiResponse } from 'next'
import LNBits from 'lnbits';
import {rskSendFunds} from "../../../utils/web3-util"; // using import

const { wallet } = LNBits({
    adminKey: process.env.LNBITS_ADMIN_KEY,
    invoiceReadKey: process.env.LNBITS_INVOICE_READ_KEY,
    endpoint: process.env.LNBITS_URL, //default
});

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const {pid} = _req.query
    let payment_hash = pid.toString();
    console.log("Client checking payment status: " + payment_hash);
    // TODO check blockchain payment
    //  let response = await wallet.checkInvoice({payment_hash: payment_hash });
    res.end(`${response['paid']}`)
}

export default handler