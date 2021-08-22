interface GnosisBalanceData {
  balance: string;
  token: {
    name: string;
    symbol: string;
    decimals: number;
    logoUri: string;
  } | null;
  tokenAddress: string | null;
}

export const parseGnosisBalances = (balanceData: GnosisBalanceData[]) => {
  const parsedData: Record<string, string> = {
    SNX: "0.00",
    sUSD: "0.00",
    ETH: "0.00",
    sETH: "0.00",
  };

  for (const b of balanceData) {
    if (b.tokenAddress && b.token) {
      parsedData[b.token.symbol] = (
        parseFloat(b.balance) /
        10 ** b.token.decimals
      ).toFixed(2);
    } else {
      parsedData["ETH"] = (parseFloat(b.balance) / 10 ** 18).toFixed(2);
    }
  }

  return parsedData;
};
