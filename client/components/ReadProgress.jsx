import styles from "../styles/ReadProgress.module.scss";

const ReadProgress = ({ width }) => {
  return <div style={{ width: `${width}%` }} className={styles.bar} />;
};

export default ReadProgress;
