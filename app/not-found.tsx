import type { Metadata } from 'next';
import styles from '../styles/404.module.scss';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main className={styles.error}>
      <h1 className={styles.h1}>404</h1>
      <h2 className={styles.h2}>This page could not be found.</h2>
    </main>
  );
}
