import Head from "next/head";
import { useRouter } from "next/router";
import { Articles } from "/articles";
import { ArticleContent } from "/components";
import { CommentSection } from "/components";
import { getArticleData, getArticlesTitles } from "/lib";

const Article = ({ article }) => {
  const { asPath } = useRouter();

  const extractPageTitle = (title) => {
    return Articles.filter((article) => article.link === title)[0]?.title ?? "";
  };

  const extractPageKeywords = (title) => {
    return (
      Articles.filter(
        (article) => article.link === title
      )[0]?.tags?.toString() ?? ""
    );
  };

  const extractArticleAuthor = (title) => {
    return (
      Articles.filter((article) => article.link === title)[0]?.author ?? ""
    );
  };

  return (
    <>
      <Head>
        <meta keywords={extractPageKeywords(article.title)}></meta>
        <meta
          name="author"
          content={extractArticleAuthor(article.title)}
        ></meta>
        <title>{extractPageTitle(article.title)}</title>
      </Head>
      <main>
        <ArticleContent article={article} />
        <CommentSection
          shortname={"h4x0rlol"}
          url={`https://h4x0rlol.me${asPath}`}
          id={article.id}
          title={article.title}
        />
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
  const titles = await getArticlesTitles();

  return {
    paths: titles.map((title) => ({ params: { title } })),
    fallback: false,
  };
};

export default Article;
