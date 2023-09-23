'use client';

import { PATHS, THEMES } from '@/constants';
import { ArrowIcon } from '@/icons/ArrowIcon';
import { MoonIcon } from '@/icons/MoonIcon';
import { SunIcon } from '@/icons/SunIcon';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/Navbar.module.scss';

export function Navbar() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme ?? '');
  const inactiveTheme = activeTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

  const pathname = usePathname();

  const handleThemeChange = () => {
    document.body.dataset.theme = inactiveTheme;
    localStorage.setItem('theme', inactiveTheme);
    setActiveTheme(inactiveTheme);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link className={styles.navbar_name} href={PATHS.MAIN}>
          h4x0rlol
        </Link>
        <nav className={styles.navbar_buttons}>
          <Link className={clsx(styles.link, pathname === PATHS.BLOG && styles.active_link)} href={PATHS.BLOG}>
            Blog
          </Link>
          <Link className={clsx(styles.link, pathname === PATHS.ABOUT && styles.active_link)} href={PATHS.ABOUT}>
            About
          </Link>
        </nav>
        <div className={styles.navbar_buttons}>
          <button
            className={styles.navbar_theme_button}
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
            onClick={handleThemeChange}
          >
            <label className={styles.navbar_theme_switcher}>
              <input type="checkbox" checked={activeTheme === THEMES.LIGHT} disabled />
              <div>
                <SunIcon focusable="false" role="img" aria-hidden="true" className={styles.switcher_sun} />
                <ArrowIcon focusable="false" role="img" aria-hidden="true" className={styles.switcher_arrow} />
                <MoonIcon focusable="false" role="img" aria-hidden="true" className={styles.switcher_moon} />
              </div>
            </label>
          </button>
        </div>
      </div>
    </header>
  );
}
