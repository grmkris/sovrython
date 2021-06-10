// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SimpleStorage);
// };

const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {  
  deployer.deploy(SimpleStorage);
};