import Router from 'next/router'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'

/**
 * Followed https://docs.blocknative.com/notify-sdk#initialize-the-library
 */

const DAPP_API = '4e4e9227-9dfe-4db1-b76b-17513380a045';
const NETWORK_ID = 42;

let options = {
    dappId: DAPP_API,
    networkId: NETWORK_ID,
};

let web3;
let walletConnected = false;
let truncatedAddress = '';

export const onboard = Onboard({
    dappId: DAPP_API,
    networkId: NETWORK_ID,
    darkMode: true,
    subscriptions: {
        wallet: wallet => {
            if (wallet) {
                web3 = new Web3(wallet.provider);
                window.localStorage.setItem('selectedWallet', wallet.name);
            }
        },
        address: address => {
            if (address) {
                truncatedAddress = truncateAddress(address);
                window.localStorage.setItem('truncatedAddress', truncatedAddress);
            }
        }
    }
});

export async function connect() {
    Router.push('/');
    let walletSelect = await onboard.walletSelect();
    if (walletSelect) {
        walletConnected = await onboard.walletCheck();
        Router.push('/');
    }
}

export function disconnect() {
    onboard.walletReset();
    walletConnected = false;
    Router.push('/');
}

export function isConnected(): boolean {
    return walletConnected;
}

export function getTruncatedAddress(): string {
    return truncatedAddress;
}

export function truncateAddress(addressStr: string, first = 5, last = 5) {
    return addressStr.slice(0, first) + '...' + addressStr.slice(-last, addressStr.length);
}

export async function autoConnectConnect() {

    const previouslySelectedWallet = window.localStorage.getItem('selectedWallet');

    if (previouslySelectedWallet === undefined || previouslySelectedWallet === 'undefined' || previouslySelectedWallet == null) return;

    let walletSelect = await onboard.walletSelect(previouslySelectedWallet);
    if (walletSelect) {
        walletConnected = await onboard.walletCheck();

        truncatedAddress = window.localStorage.getItem('truncatedAddress');
        Router.push('/');
    }
}

//connect on load
autoConnectConnect();
