import { useQuery, UseQueryOptions } from "react-query";

const GNOSIS_SAFE_ADDRESS = "0xeb9a82736cc030fC4A4CD4b53e9B2c67e153208d";
const GNOSIS_API_BASE_URL = "https://safe-transaction.gnosis.io/api/v1";

const useGetGnosisBalances = (options?: UseQueryOptions) => {
  return useQuery(
    ["gnosis", "balances"],
    async () => {
      const response = await fetch(
        `${GNOSIS_API_BASE_URL}/safes/${GNOSIS_SAFE_ADDRESS}/balances`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    },
    options
  );
};

export default useGetGnosisBalances;
