import styles from "/styles/ReadProgress.module.scss";

export const ReadProgress = ({ width }) => {
  return <div style={{ width: `${width}%` }} className={styles.bar} />;
};
