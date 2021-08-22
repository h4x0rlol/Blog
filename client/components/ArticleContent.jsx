import dynamic from "next/dynamic";
import styles from "../styles/Article.module.scss";

const ArticleContent = ({ article }) => {
  const ReactMarkdown = dynamic(() => import("react-markdown"));

  return (
    <article className={styles.container}>
      <ReactMarkdown>{article.content}</ReactMarkdown>
    </article>
  );
};

export default ArticleContent;
