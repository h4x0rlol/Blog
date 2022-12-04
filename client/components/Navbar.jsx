import { faArrowRight, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = ({ children }) => {
  const router = useRouter();
  const [activeTheme, setActiveTheme] = React.useState(
    document.body.dataset.theme
  );
  const [isChecked, setIsChecked] = React.useState(
    activeTheme === "light" ? true : false
  );
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
    setActiveTheme(inactiveTheme);
  };

  React.useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <>
      <>
        <header className={styles.navbar}>
          <div className={styles.navbar_container}>
            <h1 className={cn([styles.navbar_name, "unset_h1"])}>h4x0rlol</h1>
            <nav className={styles.navbar_buttons}>
              <Link href="/blog">
                <a
                  className={
                    router.pathname == "/blog"
                      ? styles.active_link
                      : styles.inactive_link
                  }
                >
                  Blog
                </a>
              </Link>
              <Link href="/">
                <a
                  className={
                    router.pathname == "/"
                      ? styles.active_link
                      : styles.inactive_link
                  }
                >
                  About
                </a>
              </Link>
            </nav>
            <div className={styles.navbar_buttons}>
              <div
                className={styles.navbar_theme}
                aria-label={`Change to ${inactiveTheme} mode`}
                title={`Change to ${inactiveTheme} mode`}
                type="button"
                tabIndex="0"
                onKeyPress={(e) => {
                  e.preventDefault();
                  if (e.key === " " || e.key === "Spacebar") {
                    handleThemeChange();
                  }
                }}
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
      </>
    </>
  );
};

export default Navbar;
