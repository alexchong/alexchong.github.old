import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

import { Layout, SEO, Image } from "@components/common";
import { getPostBySlug, getPostsSlugs } from "@utils/posts";

export default function Post({ post, frontmatter, nextPost, previousPost }) {
  // const tags = [];

  // for (let tag of frontmatter.tags) {
  //   tags.push(
  //     <li className="bg-black dark:bg-pidgin" key={tag}>
  //       #{tag}
  //     </li>
  //   );
  // }

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header className="mb-8">
          <h1 className="mb-2">{frontmatter.title}</h1>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-200">
            {frontmatter.date}
          </p>
          <ul className="tags">
            {frontmatter.tags.map((tag) => (
              <li className="bg-black opacity-90 dark:bg-pidgin dark:opacity-100">
                #{tag}
              </li>
            ))}
          </ul>
        </header>
        <ReactMarkdown
          className="content mb-4 prose lg:prose-lg dark:prose-dark"
          escapeHtml={false}
          source={post.content}
          renderers={{
            code: CodeBlock,
            image: MarkdownImage,
            heading: HeadingRenderer,
          }}
        />
        <hr className="mt-4" />
      </article>

      <nav className="flex flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    webpSrc={require(`../../content/assets/${src}?webp`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  // Slug regex for heading anchor IDs
  var slug = text
    .toLowerCase()
    .replace(/([()?])|(.#)/g, "") // sanitize target characters
    .replace(/\W/g, "-"); // replace non-alphanumerics to hyphens
  return React.createElement("h" + props.level, { id: slug }, props.children);
}
