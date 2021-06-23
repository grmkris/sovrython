import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useRef, useState} from 'react'
import Loader from "react-loader-spinner";
import {CreateInvoice} from "../interfaces";

const API_URL = 'http://localhost:3000/api/lnbits';

const QRCode = require('qrcode.react');
export default function MyModal(props) {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<CreateInvoice | undefined>(undefined);
    const [paymentStatus, setPaymentStatus] = useState(false);

    async function fetcher(url) {
        console.log(open);
        let data = {
            address: props.props.address,
            amount: props.props.amount
        }
        const res = await fetch(url, {method: "POST", body: JSON.stringify(data)});
        const json = await res.json();
        console.log(json);
        return json;
    }

    async function getPaymentStatus(payment_hash) {
        const res = await fetch(API_URL + `/${payment_hash}`, {method: "POST", body: JSON.stringify(data)});
        return res.json();
    }

    async function check_payment(payment_hash){
        let timerId = setInterval(async function () {
            console.log("Checking payment for: " + payment_hash)
            let paid = await getPaymentStatus(payment_hash);
            if (paid == true){
                clearInterval(timerId);
                setPaymentStatus(true);
                console.log("Payment received for: " + payment_hash)
            }
            if (!open)
                clearInterval(timerId);
        }, 2000)
        paymentStatus?console.log("interval already cleared"):setTimeout(() => { clearInterval(timerId); console.log("No payment for: " + payment_hash); }, 60000);
    }

    useEffect(() => {
        if (open){
            fetcher(API_URL).then(data => {
                setData(data);
                check_payment(data.payment_hash).then(r => console.log(r));
            });
        }
    },[open])

    function closeModal() {
        setOpen(false)
        setPaymentStatus(false)
    }

    function openModal() {
        setOpen(true)
    }

    return (
        <>
            <button className="text-white font-semibold m-4 py-2 px-4 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-400 hover:to-blue-500" onClick={() => {
                setOpen(true);
            }}>SUBMIT</button>

            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >

                                </Dialog.Title>
                                <div>
                                    <div className="mt-2">
                                        {!data &&
                                        <div className="mx-auto w-min">
                                            <Loader type="ThreeDots" color="orange" height="100" width="100" />
                                        </div>}
                                        {data &&
                                         <>
                                             {!paymentStatus && <>
                                                 <QRCode  className="mt-1 mx-auto" value={data.payment_request} size={256} />
                                                 <div className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                                     Waiting for payment</div>
                                                 <div className="mx-auto w-min">
                                                     <Loader type="ThreeDots" color="orange" height="50" width="100" />
                                                 </div>
                                                 <span className="mb-4 text-xs leading-relaxed break-words">{data.payment_request}</span>
                                             </> }
                                             {paymentStatus && <>
                                                 <div className="mx-auto w-min" >
                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 fill-current text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                     </svg>
                                                 </div>
                                             </>}

                                        </>
                                        }
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        {!paymentStatus && "Cancel"}
                                        {paymentStatus && "Close"}
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}