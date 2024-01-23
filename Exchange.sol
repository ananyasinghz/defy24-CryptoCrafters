// Exchange.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exchange {
    ERC20 public token;

    constructor(address _tokenAddress) {
        token = ERC20(_tokenAddress);
    }

    function exchangeTokens(uint256 _amount) public {
        // Perform exchange logic here
        // Ensure you have proper security checks and calculations
        // For simplicity, we'll just transfer tokens to the contract owner
        token.transfer(msg.sender, _amount);
    }
}
