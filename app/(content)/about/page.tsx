import { Header, Projects } from '@/components';
import { Metadata } from 'next';
import styles from '../../../styles/About.module.scss';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <Projects />
    </div>
  );
}
