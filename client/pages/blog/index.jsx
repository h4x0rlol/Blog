import Head from "next/head";
import Link from "next/link";
import { Articles } from "../../articles/Articles";
import styles from "../../styles/Blog.module.scss";

const Blog = () => {
  return (
    <>
      <Head>
        <meta keywords="h4x0rlol, cv, blog, resume, portfolio"></meta>
        <title>Blog</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          {Articles.map((article) => (
            <article key={article.id} className={styles.article}>
              <div className={styles.article_inner}>
                <div className={styles.wrapper}>
                  <div>
                    <header className={styles.article_header}>
                      <h1 className={styles.name}>
                        <Link
                          className={styles.article_title}
                          href={`/blog/${article.link}`}
                        >
                          {article.title}
                        </Link>
                      </h1>
                    </header>
                  </div>
                  <div>
                    <div className={styles.article_date}>
                      <time className={styles.time}>{article.date}</time>
                    </div>
                  </div>
                </div>
                <div className={styles.article_footer}>
                  <ul className={styles.article_tags}>
                    <li className={styles.tags_first}>Tags:</li>
                    {article.tags.map((tag) => (
                      <li key={tag} className={styles.tags_item}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
