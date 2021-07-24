import Header from "../components/Header";
import Projects from "../components/Projects";
import styles from "../styles/Index.module.scss";

const Index = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <Header />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Index;
