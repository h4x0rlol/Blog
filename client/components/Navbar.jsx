import { useState, useLayoutEffect } from "react";
import { faArrowRight, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "/styles/Navbar.module.scss";

export const Navbar = () => {
  const router = useRouter();
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const [isChecked, setIsChecked] = useState(
    activeTheme === "light" ? true : false
  );
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
    setActiveTheme(inactiveTheme);
  };

  const onKeyDown = (e) => {
    e.preventDefault();
    if (e.key === " " || e.key === "Spacebar" || e.key === "Enter") {
      handleThemeChange();
    }
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link className={styles.navbar_name} href="/">
          h4x0rlol
        </Link>
        <nav className={styles.navbar_buttons}>
          <Link
            className={
              router.pathname === "/blog"
                ? styles.active_link
                : styles.inactive_link
            }
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={
              router.pathname === "/about"
                ? styles.active_link
                : styles.inactive_link
            }
            href="/about"
          >
            About
          </Link>
        </nav>
        <div className={styles.navbar_buttons}>
          <div
            className={styles.navbar_theme}
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
            type="button"
            tabIndex="0"
            onKeyDown={onKeyDown}
          >
            <label className={styles.navbar_theme_switcher}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleThemeChange}
              />
              <div>
                <i className={styles.switcher_sun}>
                  <FontAwesomeIcon icon={faSun} />
                </i>
                <i>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={styles.switcher_arrow}
                  />
                </i>
                <i className={styles.switcher_moon}>
                  <FontAwesomeIcon icon={faMoon} />
                </i>
              </div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};
