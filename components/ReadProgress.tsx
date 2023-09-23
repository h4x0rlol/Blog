import styles from '../styles/ReadProgress.module.scss';

type Props = {
  width: number;
};

export function ReadProgress({ width }: Props) {
  return <div style={{ width: `${width}%` }} className={styles.bar} />;
}
