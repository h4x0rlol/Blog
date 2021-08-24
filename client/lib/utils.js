import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "articles");

export function getArticlesFiles() {
  return fs.readdirSync(articlesDirectory);
}

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getArticleData(filename) {
  const articleTitle = filename.replace(/\.md/, "");
  const filePath = path.join(articlesDirectory, `${articleTitle}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const contentToHtml = await markdownToHtml(content || "");

  const articleData = {
    title: articleTitle,
    ...data,
    content: contentToHtml,
  };

  return articleData;
}
