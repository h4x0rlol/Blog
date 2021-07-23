import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { faSun, faArrowRight, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Navbar = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_container}>
          <h1 className={styles.navbar_name}>h4x0rlol</h1>
          <div className={styles.navbar_buttons}>
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
                CV
              </a>
            </Link>
          </div>
          <div className={styles.navbar_buttons}>
            <div className={styles.navbar_language}>
              <label className={styles.navbar_switcher}>
                <input className={styles.navbar_input} type="checkbox" />
                <span className={styles.navbar_slider}></span>
                <span className={styles.navbar_en}>EN</span>
                <span className={styles.navbar_ru}>RU</span>
              </label>
            </div>
            <div className={styles.navbar_theme}>
              <label className={styles.navbar_theme_switcher}>
                <input type="checkbox" />
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
      </div>
      <div>{children}</div>
    </>
  );
};

export default Navbar;
