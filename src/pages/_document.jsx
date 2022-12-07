import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
// import clsx from "clsx";
// import { useTheme } from "../context/theme-context";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
