const TimeStamp = artifacts.require("TimeStamp");

module.exports = function(deployer) {
  deployer.deploy(TimeStamp);
};