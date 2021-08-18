import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";
import { ethers } from "ethers";
import { Wallet as OnboardWallet } from "bnc-onboard/dist/src/interfaces";

import { initOnboard, MAINNET_NETWORK_ID } from "./walletConfig";

const WALLET_STORAGE_KEY = "cachedWallet";

const useConnector = () => {
  const [provider, setProvider] = useState<ethers.providers.Provider | null>(
    null
  );
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [onboard, setOnboard] = useState<ReturnType<typeof initOnboard> | null>(
    null
  );

  useEffect(() => {
    const cachedWallet = window.localStorage.getItem(WALLET_STORAGE_KEY);
    if (onboard && cachedWallet && !walletAddress) {
      onboard.walletSelect(cachedWallet);
    }
  }, [onboard, walletAddress]);

  useEffect(() => {
    const onboard = initOnboard({
      network: (networkId: number) => {
        if (networkId === MAINNET_NETWORK_ID) {
          const provider = new ethers.providers.Web3Provider(
            onboard.getState().wallet.provider
          );
          const signer = provider.getSigner();
          onboard.config({ networkId });
          setProvider(provider);
          setSigner(signer);
        } else {
        }
      },
      wallet: async (wallet: OnboardWallet) => {
        if (wallet.provider) {
          const provider = new ethers.providers.Web3Provider(wallet.provider);

          setProvider(provider);
          setSigner(provider.getSigner());
          if (wallet.name) {
            window.localStorage.setItem(WALLET_STORAGE_KEY, wallet.name);
          }
        } else {
          setSigner(null);
          setWalletAddress(null);
        }
      },
      address: (address) => {
        if (address) {
          setWalletAddress(address);
        }
      },
    });

    setOnboard(onboard);
  }, []);

  const connectWallet = async () => {
    try {
      if (onboard) {
        onboard.walletReset();
        const success = await onboard.walletSelect();
        if (success) {
          await onboard.walletCheck();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (onboard) {
        onboard.walletReset();
        window.localStorage.removeItem(WALLET_STORAGE_KEY);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    provider,
    signer,
    onboard,
    connectWallet,
    disconnectWallet,
    walletAddress,
  };
};

const Connector = createContainer(useConnector);

export default Connector;
