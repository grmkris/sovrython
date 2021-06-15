pragma solidity >=0.4.21 <0.7.0;

contract TimeStamp {
  function Time_call() public view returns (uint256){
    return now;
  }
}