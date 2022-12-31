import Head from "next/head";
import styles from "/styles/About.module.scss";

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="h4x0rlol, cv, blog, resume, portfolio" />
        <title>h4x0rlol</title>
      </Head>
      <div className={styles.container}>WebGL</div>
    </>
  );
};

export default Index;
