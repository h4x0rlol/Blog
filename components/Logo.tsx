'use client';

import { LINKS, PATHS } from '@/constants';
import { GithubIcon } from '@/icons';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/Logo.module.scss';

export function Logo() {
  useEffect(() => {
    const elemIntro = document.getElementsByClassName('js-transition-intro');

    const transitionOnload = () => {
      for (let i = 0; i < elemIntro.length; i++) {
        const elm = elemIntro[i];
        elm.classList.add(styles.is_shown);
      }
    };

    transitionOnload();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={clsx(styles.container__row, 'js-transition-intro')}>
            <h2 className={styles.name}>h4x0rlol</h2>
          </div>
          <div className={clsx(styles.container__row, 'js-transition-intro')}>
            <div className={styles.links}>
              <Link className={styles.link} href={PATHS.BLOG}>
                <span className={styles.link__label}>Blog</span>
                <span className={styles.link__bg} />
              </Link>
              <Link className={styles.link} href={PATHS.ABOUT}>
                <span className={styles.link__label}>About</span>
                <span className={styles.link__bg} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.icon, 'js-transition-intro')}>
        <a className={styles.github} href={LINKS.GITHUB} target="_blank">
          <GithubIcon className={styles.github} role="img" />
        </a>
      </div>
    </>
  );
}
