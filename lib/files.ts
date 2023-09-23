import { Articles } from '@/articles';
import fs from 'fs/promises';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import path from 'path';

const articlesDirectory = path.join(process.cwd(), 'articles');

export async function getArticlesLinks() {
  const files = await fs.readdir(articlesDirectory).catch(() => notFound());

  return files.filter(fileName => path.extname(fileName) === '.mdx').map(fileName => fileName.replace(/\.mdx/, ''));
}

export async function getArticleData(link: string) {
  const filePath = path.join(articlesDirectory, `${link}.mdx`);

  const fileContent = await fs.readFile(filePath, 'utf-8').catch(() => notFound());

  const content = await serialize(fileContent);
  const article = Articles.find(article => article.link === link);

  if (!article) {
    notFound();
  }

  return {
    ...article,
    content,
  };
}
