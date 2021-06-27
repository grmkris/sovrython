import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    // TODO
    // retrieve userID from request
    // query smart contract or database for all the processed payments for this particular user
    // get latest transaction from this user and check included lninvoice and verify if it was payed)
    const {pid} = _req.query
    let payment_hash = pid.toString();
    console.log("Client checking payment status: " + payment_hash);
    // TODO check blockchain payment
    //  let response = await wallet.checkInvoice({payment_hash: payment_hash });
    //res.end(`${response['paid']}`)
}

export default handler