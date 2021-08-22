import styles from "../../styles/Blog.module.scss";
import Head from "next/head";
import Link from "next/link";
import { Articles } from "../../articles/Articles";

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
            <article className={styles.article}>
              <div className={styles.article_inner}>
                <div className={styles.wrapper}>
                  <div>
                    <header className={styles.article_header}>
                      <h1 className={styles.name}>
                        <Link href={`/blog/${article.link}`}>
                          <a className={styles.article_title}>
                            {article.title}
                          </a>
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
                      <li className={styles.tags_item}>{tag}</li>
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
