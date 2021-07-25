import styles from "../styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.h1}>404</h1>
      <div className={styles.text}>
        <h2 className={styles.h2}>This page could not be found.</h2>
      </div>
    </div>
  );
};

export default Custom404;
