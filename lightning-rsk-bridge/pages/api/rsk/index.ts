import {NextApiRequest, NextApiResponse} from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = JSON.parse(_req.body)
        const address = body['address']

        console.log(address);
        // res.status(200).json(newInvoice);
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}

export default handler
