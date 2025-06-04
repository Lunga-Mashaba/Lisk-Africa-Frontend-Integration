import { useAccount } from 'wagmi';
import { useState } from 'react';

function Wallet() {
  const { address } = useAccount();
  const [crtBalance] = useState('0');

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <p><strong>Wallet Address:</strong> {address}</p>
      <p><strong>CRT Balance:</strong> {crtBalance}</p>
    </div>
  );
}

export default Wallet;