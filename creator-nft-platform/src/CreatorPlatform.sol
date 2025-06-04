// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./CreatorToken.sol";
import "./ArtNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CreatorPlatform is Ownable {
    constructor(CreatorToken _token, ArtNFT _nft) Ownable(msg.sender) {
        token = _token;
        nft = _nft;
    }
    CreatorToken public token;
    ArtNFT public nft;

    uint256 public constant REWARD_AMOUNT = 10 * 1e18;

    mapping(uint256 => address) public creators;

    event NFTMinted(address indexed creator, uint256 indexed tokenId, string tokenURI);
    event CreatorRewarded(address indexed creator, uint256 amount);

    // Duplicate constructor removed

    function mintNFT(string memory _tokenURI) public {
        uint256 tokenId = nft.mint(msg.sender, _tokenURI);
        creators[tokenId] = msg.sender;

        emit NFTMinted(msg.sender, tokenId, _tokenURI);
        rewardCreator(msg.sender, REWARD_AMOUNT);
    }

    function rewardCreator(address to, uint256 amount) internal {
        require(token.transfer(to, amount), "Token transfer failed");
        emit CreatorRewarded(to, amount);
    }
}
