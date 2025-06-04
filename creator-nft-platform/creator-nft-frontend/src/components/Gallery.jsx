import { useEffect, useState } from 'react';

function Gallery() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetch NFTs via contract or backend API
    async function fetchNFTs() {
      const fetchedNFTs = await fetch('/api/nfts').then(res => res.json());
      setNfts(fetchedNFTs);
    }
    fetchNFTs();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">NFT Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {nfts.map((nft, index) => (
          <div key={index} className="border p-2 rounded shadow">
            <img src={nft.image} alt="NFT" className="w-full h-48 object-cover rounded" />
            <p><strong>ID:</strong> {nft.tokenId}</p>
            <p><strong>Creator:</strong> {nft.creator}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
