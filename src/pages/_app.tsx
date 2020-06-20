import Head from "next/head";
import { GlobalStyle } from "../components/pages/GlobalStyles/GlobalStyles";
import { PageLayout } from "../components/pages/PageLayout/PageLayout";

// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
};

export default MyApp;
