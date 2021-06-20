import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useRef, useState} from 'react'
import Loader from "react-loader-spinner";
import {CreateInvoice} from "../interfaces";

const API_URL = 'http://localhost:3000/api/lnbits';

const QRCode = require('qrcode.react');
export default function MyModal() {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<CreateInvoice | undefined>(undefined);

    async function fetcher(url) {
        console.log(open);
        if (open){
            const res = await fetch(url);
            const json = await res.json();
            console.log(json);
            return json;
        }
        else return "";
    }
    useEffect(() => {
        fetcher(API_URL).then(data => {
            setData(data);
        });
    },[open])

    function closeModal() {
        setOpen(false)
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
                                <div className="mt-2">
                                    {!data && <div>loading...</div>}
                                    {data &&
                                    <>
                                        <QRCode  className="mt-1 mx-auto" value={data.payment_request} size={256} />
                                        <p>Waiting for payment</p>
                                        <p>{data.payment_request}</p>
                                        <div className="mx-auto w-min">
                                            <Loader type="ThreeDots" color="orange" height="100" width="100" />
                                        </div>
                                    </>
                                    }
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Cancel
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