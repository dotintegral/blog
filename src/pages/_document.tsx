import Document, {
  DocumentContext,
  Main,
  NextScript,
  Head,
  Html,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GlobalStyle } from "../components/pages/GlobalStyles/GlobalStyles";
import { PageLayout } from "../components/pages/PageLayout/PageLayout";

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Artur Siery - Thoughts on coding</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Source+Sans+Pro&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://highlightjs.org/static/demo/styles/railscasts.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
