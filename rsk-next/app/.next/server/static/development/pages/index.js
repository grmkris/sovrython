module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contracts/SimpleStorage.json":
/*!**************************************!*\
  !*** ./contracts/SimpleStorage.json ***!
  \**************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"SimpleStorage\",\"abi\":[{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"set\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"get\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.16+commit.9c3226ce\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"get\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"x\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"set\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/home/kristjan/git/rsk-next/contracts/SimpleStorage.sol\\\":\\\"SimpleStorage\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/home/kristjan/git/rsk-next/contracts/SimpleStorage.sol\\\":{\\\"keccak256\\\":\\\"0x72009b6025c31bc8d71dab572c6d13c6eb4ca052ca0a6463ec39b392f37bd96d\\\",\\\"urls\\\":[\\\"bzz-raw://50234be443deefe9cae27ed90c028ba2a9b1424504a934476c9264e323665033\\\",\\\"dweb:/ipfs/QmcZWr3fQ2gs82VQYBkxvzFMwZHUidX3ekrWW1AnuDehuQ\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b5060c68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea265627a7a72315820cd1ce39ab24592e6d69a884feb30fad94a4e9744edd6eae583fa5b90ee2ebe1e64736f6c63430005100032\",\"deployedBytecode\":\"0x6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea265627a7a72315820cd1ce39ab24592e6d69a884feb30fad94a4e9744edd6eae583fa5b90ee2ebe1e64736f6c63430005100032\",\"sourceMap\":\"34:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;34:176:1;;;;;;;\",\"deployedSourceMap\":\"34:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;34:176:1;;;;;;;;;;;;;;;;;;;;;;;;81:53;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;81:53:1;;;;;;;;;;;;;;;;;:::i;:::-;;138:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;81:53;128:1;115:10;:14;;;;81:53;:::o;138:70::-;174:4;193:10;;186:17;;138:70;:::o\",\"source\":\"pragma solidity >=0.4.21 <0.7.0;\\n\\ncontract SimpleStorage {\\n  uint storedData;\\n\\n  function set(uint x) public {\\n    storedData = x;\\n  }\\n\\n  function get() public view returns (uint) {\\n    return storedData;\\n  }\\n}\",\"sourcePath\":\"/home/kristjan/git/rsk-next/contracts/SimpleStorage.sol\",\"ast\":{\"absolutePath\":\"/home/kristjan/git/rsk-next/contracts/SimpleStorage.sol\",\"exportedSymbols\":{\"SimpleStorage\":[79]},\"id\":80,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":58,\"literals\":[\"solidity\",\">=\",\"0.4\",\".21\",\"<\",\"0.7\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:32:1\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":79,\"linearizedBaseContracts\":[79],\"name\":\"SimpleStorage\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":60,\"name\":\"storedData\",\"nodeType\":\"VariableDeclaration\",\"scope\":79,\"src\":\"61:15:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":59,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"61:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"body\":{\"id\":69,\"nodeType\":\"Block\",\"src\":\"109:25:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":67,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":65,\"name\":\"storedData\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":60,\"src\":\"115:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":66,\"name\":\"x\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":62,\"src\":\"128:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"115:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":68,\"nodeType\":\"ExpressionStatement\",\"src\":\"115:14:1\"}]},\"documentation\":null,\"id\":70,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"set\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":63,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":62,\"name\":\"x\",\"nodeType\":\"VariableDeclaration\",\"scope\":70,\"src\":\"94:6:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":61,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"94:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"93:8:1\"},\"returnParameters\":{\"id\":64,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"109:0:1\"},\"scope\":79,\"src\":\"81:53:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":77,\"nodeType\":\"Block\",\"src\":\"180:28:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":75,\"name\":\"storedData\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":60,\"src\":\"193:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":74,\"id\":76,\"nodeType\":\"Return\",\"src\":\"186:17:1\"}]},\"documentation\":null,\"id\":78,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"get\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":71,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"150:2:1\"},\"returnParameters\":{\"id\":74,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":73,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":78,\"src\":\"174:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":72,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"174:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"173:6:1\"},\"scope\":79,\"src\":\"138:70:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":80,\"src\":\"34:176:1\"}],\"src\":\"0:210:1\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/home/kristjan/git/rsk-next/contracts/SimpleStorage.sol\",\"exportedSymbols\":{\"SimpleStorage\":[79]}},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\">=\",\"0.4\",\".21\",\"<\",\"0.7\",\".0\"]},\"id\":58,\"name\":\"PragmaDirective\",\"src\":\"0:32:1\"},{\"attributes\":{\"baseContracts\":[null],\"contractDependencies\":[null],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"linearizedBaseContracts\":[79],\"name\":\"SimpleStorage\",\"scope\":80},\"children\":[{\"attributes\":{\"constant\":false,\"name\":\"storedData\",\"scope\":79,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"value\":null,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":59,\"name\":\"ElementaryTypeName\",\"src\":\"61:4:1\"}],\"id\":60,\"name\":\"VariableDeclaration\",\"src\":\"61:15:1\"},{\"attributes\":{\"documentation\":null,\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"set\",\"scope\":79,\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"name\":\"x\",\"scope\":70,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"value\":null,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":61,\"name\":\"ElementaryTypeName\",\"src\":\"94:4:1\"}],\"id\":62,\"name\":\"VariableDeclaration\",\"src\":\"94:6:1\"}],\"id\":63,\"name\":\"ParameterList\",\"src\":\"93:8:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":64,\"name\":\"ParameterList\",\"src\":\"109:0:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"argumentTypes\":null,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"argumentTypes\":null,\"overloadedDeclarations\":[null],\"referencedDeclaration\":60,\"type\":\"uint256\",\"value\":\"storedData\"},\"id\":65,\"name\":\"Identifier\",\"src\":\"115:10:1\"},{\"attributes\":{\"argumentTypes\":null,\"overloadedDeclarations\":[null],\"referencedDeclaration\":62,\"type\":\"uint256\",\"value\":\"x\"},\"id\":66,\"name\":\"Identifier\",\"src\":\"128:1:1\"}],\"id\":67,\"name\":\"Assignment\",\"src\":\"115:14:1\"}],\"id\":68,\"name\":\"ExpressionStatement\",\"src\":\"115:14:1\"}],\"id\":69,\"name\":\"Block\",\"src\":\"109:25:1\"}],\"id\":70,\"name\":\"FunctionDefinition\",\"src\":\"81:53:1\"},{\"attributes\":{\"documentation\":null,\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"get\",\"scope\":79,\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":71,\"name\":\"ParameterList\",\"src\":\"150:2:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"name\":\"\",\"scope\":78,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"value\":null,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":72,\"name\":\"ElementaryTypeName\",\"src\":\"174:4:1\"}],\"id\":73,\"name\":\"VariableDeclaration\",\"src\":\"174:4:1\"}],\"id\":74,\"name\":\"ParameterList\",\"src\":\"173:6:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":74},\"children\":[{\"attributes\":{\"argumentTypes\":null,\"overloadedDeclarations\":[null],\"referencedDeclaration\":60,\"type\":\"uint256\",\"value\":\"storedData\"},\"id\":75,\"name\":\"Identifier\",\"src\":\"193:10:1\"}],\"id\":76,\"name\":\"Return\",\"src\":\"186:17:1\"}],\"id\":77,\"name\":\"Block\",\"src\":\"180:28:1\"}],\"id\":78,\"name\":\"FunctionDefinition\",\"src\":\"138:70:1\"}],\"id\":79,\"name\":\"ContractDefinition\",\"src\":\"34:176:1\"}],\"id\":80,\"name\":\"SourceUnit\",\"src\":\"0:210:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.16+commit.9c3226ce.Emscripten.clang\"},\"networks\":{\"31\":{\"events\":{},\"links\":{},\"address\":\"0xDfc75397c590737f292c708C39022E2Dd7e006aA\",\"transactionHash\":\"0x33eb7f0c3c84299bb66fdb913dfb2b57f01796f7c3e6c7ccf7effe4e68f38bbb\"},\"5777\":{\"events\":{},\"links\":{},\"address\":\"0xBE6c71D2d88C277aEA2d7c3da78cf66B019aAE2d\",\"transactionHash\":\"0x743d76b71516ca44ec227c4daa397adbfa885c51d61dc2b7d3c07256079f7053\"}},\"schemaVersion\":\"3.4.1\",\"updatedAt\":\"2021-06-09T18:08:01.878Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}}");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_styles_index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/styles/index-styles */ "./static/styles/index-styles.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Spinner */ "react-bootstrap/Spinner");
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_web3_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/web3-util */ "./utils/web3-util.js");
var _jsxFileName = "/home/kristjan/git/rsk-next/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Index(props) {
  const UpdateButton = () => __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "success",
    onClick: () => updateNetworkData(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "Update");

  const {
    0: mainnetBlock,
    1: setMainnetBlock
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: testnetBlock,
    1: setTestnetBlock
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: simpleStorageValue,
    1: setSimpleStorageValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: updateComponent,
    1: setUpdateComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx(UpdateButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 58
    }
  }));
  const {
    0: bestBlockLoading,
    1: setBestBlockLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const initNetworkData = async () => {
      const mainnetBestBlock = await _utils_web3_util__WEBPACK_IMPORTED_MODULE_6__["web3Mainnet"].eth.getBlockNumber();
      const testnetBestBlock = await _utils_web3_util__WEBPACK_IMPORTED_MODULE_6__["web3Testnet"].eth.getBlockNumber();
      const networkSimpleStorageValue = await Object(_utils_web3_util__WEBPACK_IMPORTED_MODULE_6__["getSimpleStorageValue"])();
      setSimpleStorageValue(networkSimpleStorageValue.toNumber());
      setMainnetBlock(mainnetBestBlock);
      setTestnetBlock(testnetBestBlock);
      setBestBlockLoading(false);
    };

    initNetworkData();
  }, []);

  async function updateNetworkData() {
    setUpdateComponent(__jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
      animation: "border",
      variant: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 24
      }
    }));
    setMainnetBlock(await _utils_web3_util__WEBPACK_IMPORTED_MODULE_6__["web3Mainnet"].eth.getBlockNumber());
    setTestnetBlock(await _utils_web3_util__WEBPACK_IMPORTED_MODULE_6__["web3Testnet"].eth.getBlockNumber());
    setSimpleStorageValue((await Object(_utils_web3_util__WEBPACK_IMPORTED_MODULE_6__["getSimpleStorageValue"])()).toNumber());
    setUpdateComponent(__jsx(UpdateButton, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 24
      }
    }));
  }

  const NetworkData = props => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !props.loading ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, "Mainnet best block ", props.mainnetBlock), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, "Testnet best block ", props.testnetBlock), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, "Simple Storage Value ", props.simpleStorageValue)) : __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
      animation: "border",
      variant: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }));
  };

  return __jsx("div", {
    className: "body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, _static_styles_index_styles__WEBPACK_IMPORTED_MODULE_1__["default"], __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "rsk-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), __jsx("h1", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "Welcome To RSK + Next JS Truffle Box"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(NetworkData, {
    mainnetBlock: mainnetBlock,
    testnetBlock: testnetBlock,
    simpleStorageValue: simpleStorageValue,
    loading: bestBlockLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), updateComponent));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/styles/index-styles.js":
/*!***************************************!*\
  !*** ./static/styles/index-styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/kristjan/git/rsk-next/app/static/styles/index-styles.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const styles = __jsx("style", {
  jsx: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, `
      .body {
        height: 100vh;
        text-align: center;
      }
      .header {
        font-family: 'Arial';
      }
      .rsk-logo {
        content: url('static/images/logo.png');
        height: 300px;
      }
    `);

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

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
const Web3 = __webpack_require__(/*! web3 */ "web3");

const SimpleStorageContract = __webpack_require__(/*! ../contracts/SimpleStorage.json */ "./contracts/SimpleStorage.json");

let web3Mainnet = new Web3(new Web3.providers.HttpProvider('https://public-node.rsk.co'));
let web3Testnet = new Web3(new Web3.providers.HttpProvider('https://public-node.testnet.rsk.co'));
async function getSimpleStorageValue() {
  // To connect to RSK network update line 15 for one of the following providers:
  // const provider = new Web3.providers.HttpProvider("https://public-node.testnet.rsk.co");
  // const provider = new Web3.providers.HttpProvider("https://public-node.rsk.co");
  const provider = new Web3.providers.HttpProvider("https://public-node.testnet.rsk.co");
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = SimpleStorageContract.networks[networkId];
  const contractInstance = new web3.eth.Contract(SimpleStorageContract.abi, deployedNetwork && deployedNetwork.address);
  return await contractInstance.methods.get().call();
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kristjan/git/rsk-next/app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/Spinner":
/*!******************************************!*\
  !*** external "react-bootstrap/Spinner" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map