import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppProps } from "next/app";
import Connector from "../containers/Connector";

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Connector.Provider>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Connector.Provider>
    </QueryClientProvider>
  );
}
export default App;
