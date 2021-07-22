import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = ({ children }) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_container}>
          <h1 className={styles.navbar_name}>h4x0rlol</h1>
          <div className={styles.navbar_buttons}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/">
              <a>CV</a>
            </Link>
            <div className={styles.navbar_language}>
              <label className={styles.navbar_switcher}>
                <input className={styles.navbar_input} type="checkbox" />
                <span className={styles.navbar_slider}></span>
                <span className={styles.navbar_en}>EN</span>
                <span className={styles.navbar_ru}>RU</span>
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
