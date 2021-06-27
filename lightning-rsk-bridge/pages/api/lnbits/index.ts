import {NextApiRequest, NextApiResponse} from 'next'
import {createInvoice, waitForPaymentAndSendFunds} from "../../../utils/lightning-utils";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = JSON.parse(_req.body)
        const amount = body['amount']
        const address = body['address']
        const newInvoice = await  createInvoice(amount, address);
        console.log(newInvoice);
        waitForPaymentAndSendFunds(newInvoice, address, amount).then();
        res.status(200).json(newInvoice);
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}

export default handler
