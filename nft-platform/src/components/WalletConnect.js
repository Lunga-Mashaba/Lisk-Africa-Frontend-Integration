import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

const WalletConnect = () => {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [tokenBalance, setTokenBalance] = useState(null);

    useEffect(() => {
        const init = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                const accounts = await provider.request({ method: 'eth_accounts' });
                if (accounts.length) {
                    setAccount(accounts[0]);
                    const ethBalance = await provider.request({
                        method: 'eth_getBalance',
                        params: [accounts[0], 'latest'],
                    });
                    setBalance(ethers.utils.formatEther(ethBalance));

                    const tokenContract = new ethers.Contract(
                        "YOUR_CREATOR_TOKEN_ADDRESS",
                        ["function balanceOf(address) view returns (uint256)"],
                        new ethers.providers.Web3Provider(provider)
                    );
                    const tokenBal = await tokenContract.balanceOf(accounts[0]);
                    setTokenBalance(ethers.utils.formatUnits(tokenBal, 18));
                }
            }
        };
        init();
    }, [account]);

    return (
        <div>
            {account ? (
                <div>
                    <p>Account: {account}</p>
                    <p>ETH Balance: {balance}</p>
                    <p>CTK Balance: {tokenBalance}</p>
                </div>
            ) : (
                <p>Connect your wallet</p>
            )}
        </div>
    );
};

export default WalletConnect;
