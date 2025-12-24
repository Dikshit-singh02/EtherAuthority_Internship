// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AttendanceToken is ERC20, Ownable {

    constructor() ERC20("Attendance Token", "ATT") Ownable(msg.sender) {
        _mint(msg.sender, 300000 * 10**18);
    }

    function mint(address to, uint amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint amount) public {
        _burn(msg.sender, amount);
    }
}
