// src/components/MintNFT.js
import { useState } from "react";
import { create } from "ipfs-http-client";
import { ethers } from "ethers";
import ArtNFTABI from "./ArtNFTABI.json"; // ABI of ArtNFT contract

const client = create("https://ipfs.infura.io:5001/api/v0");

const MintNFT = ({ account }) => {
    const [file, setFile] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [minting, setMinting] = useState(false); // Tracks minting state

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const added = await client.add(file);
        const imageURI = `https://ipfs.infura.io/ipfs/${added.path}`;
        const meta = {
            name: "Art Piece",
            description: "A unique digital artwork",
            image: imageURI,
        };
        const addedMeta = await client.add(JSON.stringify(meta));
        setMetadata(`https://ipfs.infura.io/ipfs/${addedMeta.path}`);
    };

    const handleMint = async () => {
        if (!metadata) return;
        setMinting(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const artNFT = new ethers.Contract("0xYourContractAddressHere", ArtNFTABI, signer);
        const tx = await artNFT.safeMint(account, metadata);
        await tx.wait();
        setMinting(false);
    };

    return (
        <div>
    <input type="file" onChange={handleFileChange} />
    <button onClick={handleUpload}>Upload</button>
    <button onClick={handleMint} disabled={minting}>
        {minting ? "Minting..." : "Mint NFT"}
    </button>
</div>
    );
}

export default MintNFT; 
