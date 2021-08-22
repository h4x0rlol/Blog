import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "articles");

export function getArticlesFiles() {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleData(filename) {
  const articleTitle = filename.replace(/\.md/, "");
  const filePath = path.join(articlesDirectory, `${articleTitle}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const articleData = {
    title: articleTitle,
    ...data,
    content,
  };

  return articleData;
}
