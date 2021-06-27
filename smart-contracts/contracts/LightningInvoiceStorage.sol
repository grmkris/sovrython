pragma solidity >=0.4.0 <0.7.0;
pragma experimental ABIEncoderV2;

contract LightningInvoiceStorage {
    address owner;
    string[] invoices;

    constructor() public {
        owner = msg.sender;
    }

    modifier _ownerOnly(){
        require(msg.sender == owner);
        _;
    }

    function addNewInvoice(string memory _invoice) public payable {
        invoices.push(_invoice);
    }

    function getInvoices() public view returns (string[] memory) {
        return invoices;
    }

    function getContractBalance() public view returns (uint256){
        return address(this).balance;
    }

    function sendEther(uint _amount, address payable receiver) _ownerOnly public returns (bool success) {
        receiver.transfer(_amount);
        success = true;
    }
}