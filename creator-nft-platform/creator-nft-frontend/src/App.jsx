import { ConnectButton } from '@rainbow-me/rainbowkit';
import MintForm from './components/MintForm';
import Gallery from './components/Gallery';
import Wallet from './components/Wallet';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Creator NFT Platform</h1>
          <ConnectButton />
        </header>
        <Wallet />
        <MintForm />
        <Gallery />
      </div>
    </div>
  );
}

export default App;


