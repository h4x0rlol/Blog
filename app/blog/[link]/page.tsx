import { ArticleContent, CommentSection } from '@/components';
import { DOMAIN } from '@/constants';
import { getArticleData, getArticlesLinks } from '@/lib';
import { Metadata } from 'next';

type Params = {
  params: {
    link: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = await getArticleData(params.link);

  return {
    title: {
      absolute: article.title,
    },
    authors: { name: article.author },
    keywords: article.tags.join(', '),
  };
}

export async function generateStaticParams() {
  const links = await getArticlesLinks();

  return links.map(link => ({
    link,
  }));
}

export default async function Page({ params }: Params) {
  const article = await getArticleData(params.link);

  return (
    <main>
      <ArticleContent content={article.content} />
      <CommentSection url={`${DOMAIN}/blog/${article.link}`} id={article.link} title={article.title} />
    </main>
  );
}
