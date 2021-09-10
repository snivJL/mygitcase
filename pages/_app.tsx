import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { ReposProvider } from "../contexts/ReposContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReposProvider>
      <Component {...pageProps} />
    </ReposProvider>
  );
};

export default MyApp;
