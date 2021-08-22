import { getArticleData, getArticlesFiles } from "../../lib/utils";
import ArticleContent from "../../components/ArticleContent";

const Article = ({ article }) => {
  return <ArticleContent article={article} />;
};

export const getStaticProps = async (context) => {
  const { title } = context.params;
  const articleData = getArticleData(title);
  return {
    props: {
      article: articleData,
    },
  };
};

export const getStaticPaths = async () => {
  const articleFilenames = getArticlesFiles();
  const titles = articleFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: titles.map((title) => ({ params: { title: title } })),
    fallback: false,
  };
};

export default Article;
