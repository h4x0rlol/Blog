import { Header, Projects } from '@/components';
import styles from '../../styles/About.module.scss';

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <Projects />
    </div>
  );
}
