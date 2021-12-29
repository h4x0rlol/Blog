import Head from "next/head";
import { getArticleData, getArticlesFiles } from "../../lib/utils";
import ArticleContent from "../../components/ArticleContent";
import { Articles } from "../../lib/Articles";

const Article = ({ article }) => {
  const extractPageTitle = (title) => {
    return Articles.filter((article) => article.link === title)[0].title;
  };

  const extractPageKeywords = (title) => {
    return Articles.filter(
      (article) => article.link === title
    )[0].tags.toString();
  };

  return (
    <>
      <Head>
        <meta keywords={extractPageKeywords(article.title)}></meta>
        <title>{extractPageTitle(article.title)}</title>
      </Head>
      <main>
        <ArticleContent article={article} />
      </main>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { title } = context.params;
  const articleData = await getArticleData(title);

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
