const LightningInvoiceStorage = artifacts.require("LightningInvoiceStorage");

module.exports = function(deployer) {  
  deployer.deploy(LightningInvoiceStorage);
};