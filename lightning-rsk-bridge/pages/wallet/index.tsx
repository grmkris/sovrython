import 'tailwindcss/tailwind.css'
import Web3 from "web3";
import {useState} from "react";

declare let window: any;

function index() {

    const [username, setUsername] = useState("loading...");

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

    return (
        <>
            {username != "loading..." && <button className="text-white font-semibold m-4 py-2 px-4 rounded bg-gray-900 hover:bg-gray-800" onClick={loginToEth}>LOGOUT</button>}
            {username == "loading..." && <button className="text-white font-semibold m-4 py-2 px-4 rounded bg-gray-900 hover:bg-gray-800" onClick={loginToEth}>LOGIN</button>}
            {username != "loading..." && <span> Hello: {username} </span> }
        </>
    )

}

export default index;