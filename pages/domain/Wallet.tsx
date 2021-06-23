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
            web3 = new Web3(wallet.provider)
        }
    }
});


export async function connect() {
    await onboard.walletSelect();
    await onboard.walletCheck();
    walletConnected = true;
    Router.push('/')
}

export function isConnected() {
    return walletConnected;
}


