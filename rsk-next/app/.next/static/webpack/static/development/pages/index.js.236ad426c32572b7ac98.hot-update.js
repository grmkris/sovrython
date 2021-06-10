webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/web3-util.js":
/*!****************************!*\
  !*** ./utils/web3-util.js ***!
  \****************************/
/*! exports provided: web3Mainnet, web3Testnet, getSimpleStorageValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "web3Mainnet", function() { return web3Mainnet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "web3Testnet", function() { return web3Testnet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimpleStorageValue", function() { return getSimpleStorageValue; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");

var SimpleStorageContract = __webpack_require__(/*! ../contracts/SimpleStorage.json */ "./contracts/SimpleStorage.json");

var web3Mainnet = new Web3(new Web3.providers.HttpProvider('https://public-node.rsk.co'));
var web3Testnet = new Web3(new Web3.providers.HttpProvider('https://public-node.testnet.rsk.co'));
function getSimpleStorageValue() {
  var provider, web3, networkId, deployedNetwork, contractInstance;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getSimpleStorageValue$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // To connect to RSK network update line 15 for one of the following providers:
          // const provider = new Web3.providers.HttpProvider("https://public-node.testnet.rsk.co");
          // const provider = new Web3.providers.HttpProvider("https://public-node.rsk.co");
          provider = new Web3.providers.HttpProvider("https://public-node.testnet.rsk.co");
          web3 = new Web3(provider);
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(web3.eth.net.getId());

        case 4:
          networkId = _context.sent;
          deployedNetwork = SimpleStorageContract.networks[networkId];
          contractInstance = new web3.eth.Contract(SimpleStorageContract.abi, deployedNetwork && deployedNetwork.address);
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(contractInstance.methods.get().call());

        case 9:
          return _context.abrupt("return", _context.sent);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ })

})
//# sourceMappingURL=index.js.236ad426c32572b7ac98.hot-update.js.map