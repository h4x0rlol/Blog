import Header from "../components/Header";
import styles from "../styles/Index.module.scss";

const Index = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
};

export default Index;
