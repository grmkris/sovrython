import { NextApiRequest, NextApiResponse } from 'next'
import {checkPayment} from "../../../utils/lightning-utils"; // using import

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const {pid} = _req.query
    let payment_hash = pid.toString();
    console.log("Client checking payment status: " + payment_hash);
    let response = await checkPayment(payment_hash);
    res.status(200).json(response);
}

export default handler