import { NextApiRequest, NextApiResponse } from 'next'
import LNBits from 'lnbits'; // using import

const { wallet, userManager, paywall, withdraw, paylink, tpos } = LNBits({
    adminKey: 'e03e6378ff404c81a9d996e33693d55d',
    invoiceReadKey: '34eb2e99362f40f6b1df0244fbc19889',
    endpoint: 'http://localhost:5000/', //default
});

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const newInvoice = await wallet.createInvoice({
            amount: 10,
            memo: 'test',
            out: false,
        });
        console.log(newInvoice);
        res.status(200).json(newInvoice);
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}

export default handler
