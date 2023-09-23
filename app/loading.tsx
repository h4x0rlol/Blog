import { Loader } from '@/components';
import { Metadata } from 'next';
import styles from '../styles/Index.module.scss';

export const metadata: Metadata = {
  title: 'Loading...',
};

export default function Loading() {
  return (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
}
