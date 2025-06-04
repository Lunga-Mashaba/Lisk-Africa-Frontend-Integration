import { useState } from 'react';
import { useAccount } from 'wagmi';

function MintForm() {
  const { address } = useAccount();
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState('');
  const [loading, setLoading] = useState(false);

  if (!address) {
    return <p>Please connect your wallet to mint an NFT.</p>;
  }
    if (!file) {
      alert('Please upload a file.');
      setLoading(false);
      return;
    }
    // Upload to IPFS, get URI
  const handleMint = async (e) => {
    e.preventDefault();
      <>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <p className="text-sm text-gray-600">Connected Wallet: {address}</p>
      </>
    // Upload to IPFS, get URI
    // Call contract.mintNFT(uri)
    setLoading(false);
  };

  return (
    <form onSubmit={handleMint} className="p-4 bg-white rounded-2xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Mint New NFT</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      <textarea
        placeholder="Enter description / metadata"
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {loading ? 'Minting...' : 'Mint NFT'}
      </button>
    </form>
  );
}

export default MintForm;