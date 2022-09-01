import styles from "../styles/Article.module.scss";

const ArticleContent = ({ article }) => {
  return (
    <article
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: article.content }}
    ></article>
  );
};

export default ArticleContent;
