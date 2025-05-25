// contracts/ArtNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./CreatorToken.sol";

contract ArtNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    CreatorToken public creatorToken;
    uint256 public rewardAmount = 10 * 10 ** 18;

    mapping(uint256 => address) public creators;

    event NFTMinted(uint256 tokenId, address creator, string tokenURI);

    constructor(address _creatorToken) ERC721("ArtNFT", "ART") {
        creatorToken = CreatorToken(_creatorToken);
    }

    function safeMint(string memory uri) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        creators[tokenId] = msg.sender;

        creatorToken.rewardCreator(msg.sender, rewardAmount);

        emit NFTMinted(tokenId, msg.sender, uri);
    }
}
