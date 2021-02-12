import matter from "gray-matter";
import fs from "fs";
import path from "path";

export function getPagesFolder() {
  const pagesPath = fs.readdirSync(`${process.cwd()}/pages/.`);
  const markdownFiles = [];

  // Add only `pages./.md` files to array
  pagesPath.forEach((file) => {
    if (path.extname(file) == ".md") markdownFiles.push(file);
  });

  return markdownFiles;
}

export function getPagesSlugs() {
  const pagesFolder = getPagesFolder();

  // Map Markdown files as slugs
  const paths = pagesFolder.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;

  // console.log(paths);
}

export function getPagesProps() {
  const pagesFolder = getPagesFolder();

  const pages = pagesFolder.map((filename) => {
    // Get Markdown content as raw string
    const markdownWithMetadata = fs
      .readFileSync(`pages/${filename}`)
      .toString();

    // Parse Markdown
    const { data, excerpt, content } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    };

    // Remove .md for page name
    const slug = filename.replace(".md", "");

    return { slug, frontmatter, excerpt, content };
  });
  return pages;
}

export function getPageBySlug(slug) {
  const pages = getPagesProps();

  const pageIndex = pages.findIndex(({ slug: pageSlug }) => pageSlug === slug);
  const { frontmatter, content, excerpt } = pages[pageIndex];

  return { frontmatter, page: { content, excerpt } };
}
