import { LINKS, PATHS } from '@/constants';
import { GithubIcon, MailIcon, PdfIcon, TelegramIcon } from '@/icons';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_name}>
          <h2 className={styles.header_name_text}>Dmitriy Khailov</h2>
          <div className={styles.header_name_specialization}>
            <div className={styles.header_spoiler}>
              <p>Frontend Javascript Developer</p>
              <p className={styles.header_spoiler_tag}>at least would like to be</p>
            </div>
          </div>
        </div>
        <aside className={styles.header_contacts}>
          <ul className={styles.header_contacts_ul}>
            <li className={styles.header_contacts_li}>
              <TelegramIcon className={styles.header_svg} focusable={false} role="img" />
              <a className={styles.header_link} href={LINKS.TG} target="_blank">
                @h4x0rlol
              </a>
            </li>

            <li className={styles.header_contacts_li}>
              <MailIcon className={styles.header_svg} focusable={false} role="img" />
              <a className={styles.header_link} href="mailto:#">
                dmitriykkh@gmail.com
              </a>
            </li>

            <li className={styles.header_contacts_li}>
              <GithubIcon className={styles.header_svg} focusable={false} role="img" />
              <a className={styles.header_link} href={LINKS.GITHUB} target="_blank">
                github.com/h4x0rlol
              </a>
            </li>

            <li className={styles.header_contacts_li}>
              <PdfIcon className={styles.header_svg} focusable={false} role="img" />
              <Link className={styles.header_link} href={PATHS.CV}>
                Full CV
              </Link>
            </li>
          </ul>
        </aside>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
