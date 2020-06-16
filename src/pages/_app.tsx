import Head from "next/head";
import { GlobalStyle } from "../components/GlobalStyles/GlobalStyles";
import { PageLayout } from "../components/PageLayout/PageLayout";

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
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
};

export default MyApp;
