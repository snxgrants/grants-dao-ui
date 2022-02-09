export function truncateAddress(addressStr: string, first = 5, last = 5) {
  return (
    addressStr.slice(0, first) +
    "..." +
    addressStr.slice(-last, addressStr.length)
  );
}
export const getEtherscanLink = (address: string) => {
  return `https://etherscan.io/address${address}`;
};
