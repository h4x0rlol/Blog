import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { faSun, faArrowRight, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Navbar = ({ children }) => {
  const router = useRouter();
  const [activeTheme, setActiveTheme] = React.useState(
    document.body.dataset.theme
  );
  const [isChecked, setIsChecked] = React.useState(false);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
    setActiveTheme(inactiveTheme);
  };

  React.useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <>
      <>
        <header className={styles.navbar}>
          <div className={styles.navbar_container}>
            <h1 className={styles.navbar_name}>h4x0rlol</h1>
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
                    <i>
                      <FontAwesomeIcon icon={faSun} />
                    </i>
                    <i>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={styles.switcher_arrow}
                      />
                    </i>
                    <i>
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
