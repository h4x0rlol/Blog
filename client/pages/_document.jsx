import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    document.body.dataset.theme = 'dark';
  `;
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/favicons/favicon.ico"
            type="image/x-icon"
          />
          <meta charset="utf-8" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
