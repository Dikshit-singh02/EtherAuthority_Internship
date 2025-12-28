// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CertificateNFT is ERC721URIStorage, Ownable {

    uint256 public tokenId;

    constructor() ERC721("EtherAuthority Certificate", "EACERT") Ownable(msg.sender) {}

    function mintNFT(address to, string memory uri) public onlyOwner {
        tokenId++;
        _mint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
}
