import fs from "fs/promises";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

const articlesDirectory = path.join(process.cwd(), "articles");

export async function getArticlesTitles() {
  const files = await fs.readdir(articlesDirectory);

  return files
    .filter((fileName) => path.extname(fileName) === ".mdx")
    .map((fileName) => fileName.replace(/\.mdx/, ""));
}

export async function getArticleData(title) {
  const filePath = path.join(articlesDirectory, `${title}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf-8");

  const content = await serialize(fileContent);

  return { title, content };
}
