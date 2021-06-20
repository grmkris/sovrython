import {useEffect, useState} from "react";
import Web3 from "web3";
import 'tailwindcss/tailwind.css'
import Popup from "../components/Popup";
import MyModal from "../components/MyModal";


declare let window: any;
const QRCode = require('qrcode.react');

function bridge() {

    const [username, setUsername] = useState("loading...");
    const [showInputField, setShowInputField] = useState(false);

    function getAccounts(callback) {
        window.web3.eth.getAccounts().then(result => {
            callback(result);
        })
    }

    function loginToEth(){
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            window.ethereum.enable();
            console.log(window.web3)
            getAccounts(function(result) {
                console.log(result[0]);
                setUsername(result[0]);
            });
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    useEffect( () => {
        return;
    }, [])
    return (
        <>
            {username != "loading..." && <button className="text-white font-semibold m-4 py-2 px-4 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-400 hover:to-blue-500" onClick={loginToEth}>LOGOUT</button>}
            {username == "loading..." && <button className="text-white font-semibold m-4 py-2 px-4 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-400 hover:to-blue-500" onClick={loginToEth}>LOGIN</button>}
            {username != "loading..." && <span> Hello: {username} </span> }
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div onClick={() => {
                                setShowInputField(true);
                            }} className={` ${(username == "loading...")?"cursor-not-allowed bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600":"cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-400 hover:to-blue-500 hover:text-black"}  text-white text-6xl  rounded-lg h-64 overflow-hidden`}>
                                <span className="inline-block align-bottom pt-20">Buy RBTC with ⚡</span>
                            </div>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div onClick={() => {
                                setShowInputField(true);
                            }} className={` ${(username == "loading...")?"cursor-not-allowed bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600":"cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-400 hover:to-blue-500 hover:text-black"}  text-white text-6xl  rounded-lg h-64 overflow-hidden`}>
                                <span className="inline-block align-bottom pt-20">Buy ⚡ with RBTC</span>
                            </div>
                        </div>
                    </div>
                    {showInputField &&
                    <div >
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">₿</span>
                            </div>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="0.00"
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
                                    <option>₿ BTC</option>
                                </select>
                            </div>
                        </div>
                    </div> }
                    {showInputField && <MyModal></MyModal>}
                </div>
            </section>
        </>
    )
}
export default bridge;
