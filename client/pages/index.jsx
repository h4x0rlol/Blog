import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import styles from "../styles/Index.module.scss";

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="h4x0rlol, cv, blog, resume, portfolio"></meta>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <Projects />
      </div>
    </>
  );
};

export default Index;
