import Link from "next/link";
import styles from "/styles/Logo.module.scss";

export const Logo = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.name}>h4x0rlol</h2>
          <div className={styles.links}>
            <Link className={styles.link} href="/blog">
              <span className={styles.label}>Blog</span>
              <span className={styles.link_bg} />
            </Link>
            <Link className={styles.link} href="/about">
              <span className={styles.label}>About</span>
              <span className={styles.link_bg} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <a
          className={styles.github}
          href="https://github.com/h4x0rlol"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </>
  );
};
