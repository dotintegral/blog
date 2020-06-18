import Head from "next/head";
import { GlobalStyle } from "../components/pages/GlobalStyles/GlobalStyles";
import { PageLayout } from "../components/pages/PageLayout/PageLayout";

// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Source+Sans+Pro&display=swap"
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
