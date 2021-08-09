import Router from 'next/router'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'

/**
 * Followed https://docs.blocknative.com/notify-sdk#initialize-the-library
 */

const DAPP_API = '4e4e9227-9dfe-4db1-b76b-17513380a045';
const NETWORK_ID = 42;

let walletConnected = false;

let options = {
    dappId: DAPP_API,
    networkId: NETWORK_ID,
};


let web3;

export const onboard = Onboard({
    dappId: DAPP_API,
    networkId: NETWORK_ID,
    subscriptions: {
        wallet: wallet => {
            web3 = new Web3(wallet.provider);
            window.localStorage.setItem('selectedWallet', wallet.name);
        }
    }
});


export async function connect() {
    Router.push('/');
    await onboard.walletSelect();
    walletConnected = await onboard.walletCheck();
    Router.push('/');
}


export async function isConnected() {
    if (!walletConnected) {
        await autoConnectConnected();
    }
    return walletConnected;
}

export async function autoConnectConnected() {
    const previouslySelectedWallet = window.localStorage.getItem('selectedWallet');

    // call wallet select with that value if it exists
    if (previouslySelectedWallet != null) {
        await onboard.walletSelect(previouslySelectedWallet);
        walletConnected = await onboard.walletCheck();
    }
}


