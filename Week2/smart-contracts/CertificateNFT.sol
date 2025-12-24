// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CertificateNFT is ERC721URIStorage, Ownable {

    uint public tokenId;

    constructor(string memory name, string memory symbol) 
        ERC721(name, symbol) 
        Ownable(msg.sender) 
    {}

    function mintNFT(address to, string memory uri) public onlyOwner {
        tokenId++;
        _mint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
}
