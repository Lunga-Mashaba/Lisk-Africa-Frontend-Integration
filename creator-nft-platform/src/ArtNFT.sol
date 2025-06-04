// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ArtNFT is ERC721URIStorage {
    uint256 public nextTokenId;

    constructor() ERC721("ArtNFT", "ART") {}

    function mint(address to, string memory _tokenURI) external returns (uint256) {
        uint256 tokenId = nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }
}
