import {useEffect, useState} from "react";
import Web3 from "web3";
import 'tailwindcss/tailwind.css'
import MyModal from "../components/MyModal";
import {decode} from "@node-lightning/invoice";

declare let window: any;

function index() {

    const [username, setUsername] = useState("loading...");
    const [showInputField, setShowInputField] = useState(false);
    const [amount, setAmount] = useState(1);
    const [lninvoice, setLnInvoice] = useState({invoice: "", valueSat: "", expiry: 0, pubkey: ""});
    const [typeOfExchange, setTypeOfExchange] = useState("none")

    function decodeLightningInvoice(invoice: string) {
        let result = decode(invoice);
        setLnInvoice({
            invoice: invoice,
            valueSat: result.valueSat,
            expiry: result.expiry,
            pubkey: result.pubkey.toString('hex')
        })
    }

    function loginToEth() {
        if (window.ethereum) {
            console.log("web3 - login regular")
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable().then(result => {
                console.log(result[0])
                setUsername(result[0]);
            })
        } else if (window.web3) {
            console.log("web3 - login")
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    useEffect(() => {
        return;
    }, [])
    return (
        <>
            {username == "loading..." &&
            <button className="text-white font-semibold m-4 py-2 px-4 rounded bg-gray-900 hover:bg-gray-800"
                    onClick={loginToEth}>LOGIN</button>}

            {username != "loading..." &&
            <>
                <button className="text-white font-semibold m-4 py-2 px-4 rounded bg-gray-900 hover:bg-gray-800"
                        onClick={() => {
                            setUsername("loading...")
                        }}>LOGOUT
                </button>
                <div className="p-2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <span className="title-font font-medium text-sm md:text-lg">Hello: {username}</span>
                    </div>
                </div>
            </>
            }

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4 w-full">
                            <div onClick={() => {
                                if (username != "loading...") {
                                    setShowInputField(true);
                                    setTypeOfExchange("LBTC")
                                }
                            }}
                                 className={` ${(username == "loading...") ? "cursor-not-allowed bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600" : "cursor-pointer bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-400 hover:to-yellow-500 hover:text-black"}  text-white text-2xl md:text-6xl rounded-lg h-32 md:h-64 w-full overflow-hidden
                                            ${(typeOfExchange == "LBTC") ? "border-4 border-gray-900" : ""}
                            `}>
                                <span className="inline-block align-center pt-20">Buy RBTC with ⚡</span>
                            </div>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4 w-full">
                            <div onClick={() => {
                                if (username != "loading...") {
                                    setShowInputField(true);
                                    setTypeOfExchange("RBTC")
                                }
                            }}
                                 className={` ${(username == "loading...") ? "cursor-not-allowed bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600" : "cursor-pointer bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-400 hover:to-yellow-500 hover:text-black"}  text-white text-2xl md:text-6xl rounded-lg h-32 md:h-64 w-full overflow-hidden
                                            ${(typeOfExchange == "RBTC") ? "border-4 border-gray-900" : ""}
                            `}>
                                <span className="inline-block align-center pt-20">Buy ⚡ with RBTC</span>
                            </div>
                        </div>
                    </div>
                    {showInputField && <div>
                        {typeOfExchange == "LBTC" &&
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">₿</span>
                                </div>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="0"
                                    value={amount}
                                    onChange={e => setAmount(parseFloat(e.target.value))}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <label htmlFor="currency" className="sr-only">
                                        Currency
                                    </label>
                                    <select
                                        id="currency"
                                        name="currency"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                    >
                                        <option>SATS</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        }
                        {typeOfExchange == "RBTC" &&
                        <div>
                            <label htmlFor="price" className="block text-base font-medium text-gray-700">
                                Lightning invoice
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm mb-1">
                                <textarea
                                    name="lninvoice"
                                    id="lninvoice"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="bolt11 compatible invoice"
                                    value={lninvoice.invoice}
                                    onChange={e => decodeLightningInvoice(e.target.value)}
                                />
                            </div>
                            {
                                lninvoice.invoice != "" &&
                                <div>
                                    <label htmlFor="price" className="block text-base font-medium text-gray-700">
                                        Amount:
                                    </label> {lninvoice.valueSat} ⚡
                                    <br/>
                                    <label htmlFor="price" className="block text-base font-medium text-gray-700">
                                        Expiry:
                                    </label> {lninvoice.expiry}
                                </div>
                            }
                        </div>
                        }
                    </div>}
                    {showInputField &&
                    <MyModal props={{amount: amount, address: username, typeOfExchange: typeOfExchange}}/>}
                </div>
            </section>
        </>
    );
}

export default index;
