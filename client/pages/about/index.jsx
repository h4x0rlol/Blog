import { Layout } from "components";
import Head from "next/head";
import { Header } from "/components";
import { Projects } from "/components";
import styles from "/styles/About.module.scss";

const About = () => {
  return (
    <Layout>
      <Head>
        <meta keywords="h4x0rlol, cv, blog, resume, portfolio" />
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <Projects />
      </div>
    </Layout>
  );
};

export default About;
