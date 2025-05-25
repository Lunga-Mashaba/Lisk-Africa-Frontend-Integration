// contracts/CreatorToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CreatorToken is ERC20, Ownable {
    constructor() ERC20("CreatorToken", "CTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Initial supply
    }

    function rewardCreator(address to, uint256 amount) external onlyOwner {
        _transfer(owner(), to, amount);
    }
}
