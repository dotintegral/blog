import Head from "next/head";
import { GlobalStyle } from "../components/GlobalStyles/GlobalStyles";

// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <div>
        <h1>Page layout</h1>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
