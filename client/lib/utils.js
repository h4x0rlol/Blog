import fs from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "articles");

export async function getArticlesFiles() {
  const files = await fs.readdir(articlesDirectory);

  return files.filter((file) => path.extname(file) === ".mdx");
}

export async function getArticleData(filename) {
  const articleTitle = filename.replace(/\.mdx/, "");
  const filePath = path.join(articlesDirectory, `${articleTitle}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf-8");

  const content = await serialize(fileContent);

  const articleData = {
    title: articleTitle,
    content: content,
  };

  return articleData;
}
