import { Articles } from '@/articles';
import { PATHS } from '@/constants';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../../styles/Blog.module.scss';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {Articles.map(article => (
          <article key={article.id} className={styles.article}>
            <div className={styles.article_inner}>
              <div className={styles.article_container}>
                <header className={styles.article_header}>
                  <h1>
                    <Link className={styles.article_title} href={`${PATHS.BLOG}/${article.link}`}>
                      {article.title}
                    </Link>
                  </h1>
                </header>
                <time className={styles.article_date}>{article.date}</time>
              </div>

              <ul className={styles.article_tags}>
                <li className={styles.tags_item}>Tags:</li>
                {article.tags.map(tag => (
                  <li key={tag} className={styles.tags_item}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
