import Web3 from 'web3'
import BlocknativeSdk from 'bnc-sdk'

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

let blocknative = new BlocknativeSdk(options);

let provider = window.provider;
let web3 = new Web3(provider);
let address;

export function connect() {
    web3.eth.getAccounts().then(accounts => {
        address = accounts[0];
        walletConnected = true;
    });
}

export function isConnected() {
    return walletConnected;
}

export function send() {
    //transaction code here
    let {clientIndex} = blocknative;
}


