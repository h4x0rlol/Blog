import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
   
    document.body.dataset.theme = getUserPreference();
  `;

    //  document.body.className = 'preload'
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Dmitriy Khailov personal portfolio website and blog"
          />
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
