import styles from "../styles/Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <div className={styles.wrapper}>
              <div>
                <header className={styles.article_header}>
                  <h1 className={styles.name}>
                    <a className={styles.article_title}>
                      There is no posts yet
                    </a>
                  </h1>
                </header>
              </div>
              <div>
                <div className={styles.article_date}>
                  <time className={styles.time}>July 25, 2021</time>
                </div>
              </div>
            </div>
            <div className={styles.article_footer}>
              <ul className={styles.article_tags}>
                <li className={styles.tags_first}>Tags:</li>
                <li className={styles.tags_item}>None</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
