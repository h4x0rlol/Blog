import { Layout } from "components";
import Head from "next/head";
import styles from "/styles/404.module.scss";

const Custom404 = () => {
  return (
    <Layout>
      <Head>
        <meta keywords="h4x0rlol, cv, blog, resume, portfolio, not found, 404, error"></meta>
        <title>Not Found</title>
      </Head>

      <main className={styles.error}>
        <h1 className={styles.h1}>404</h1>
        <div className={styles.text}>
          <h2 className={styles.h2}>This page could not be found.</h2>
        </div>
      </main>
    </Layout>
  );
};

export default Custom404;
