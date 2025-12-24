// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InternRewardToken is ERC20, Ownable {

    constructor() ERC20("Intern Reward Token", "IRT") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 10**18);
    }

    function mint(address to, uint amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint amount) public {
        _burn(msg.sender, amount);
    }
}
