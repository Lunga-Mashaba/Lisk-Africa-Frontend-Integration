import './App.css';
import WalletConnect from './components/WalletConnect';
import MintNFT from './components/MintNFT';
import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';


function App() {
  // Removed unused provider state
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  // Connect wallet and get provider/signer
  const connectWallet = async () => {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      await ethereumProvider.request({ method: 'eth_requestAccounts' });
      const ethersProvider = new ethers.providers.Web3Provider(ethereumProvider);
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();
      const balance = await ethersProvider.getBalance(address);

      // Removed setting provider as it is unused
      setSigner(signer);
      setAccount(address);
      setBalance(ethers.utils.formatEther(balance));
    } else {
      alert('MetaMask not detected. Please install it to use this dApp.');
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎨 NFT Reward Platform</h1>
        {account ? (
          <div>
            <p><strong>Connected Wallet:</strong> {account}</p>
            <p><strong>ETH Balance:</strong> {balance} ETH</p>
          </div>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </header>

      <main>
        {/* WalletConnect is optional here; you might move its logic into App.js */}
        <WalletConnect account={account} />

        <section>
          <h2>Mint a New NFT</h2>
          <MintNFT signer={signer} account={account} />
        </section>
      </main>
    </div>
  );
}

export default App;
