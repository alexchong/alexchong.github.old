import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import { getPageBySlug, getPagesSlugs } from "@utils/pages";
import { Layout, SEO, Image, Bio } from "@components/common";

export default function Page({ page, frontmatter }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || page.excerpt}
      />
      <article className="content">
        <header className="mb-8">
          <h1 className="mb-2">{frontmatter.title}</h1>
          {/* <p className="text-sm">{frontmatter.date}</p> */}
        </header>
        <ReactMarkdown
          className="mb-4 prose lg:prose-lg dark:prose-dark"
          escapeHtml={false}
          source={page.content}
          renderers={{
            image: MarkdownImage,
            heading: HeadingRenderer,
          }}
        />
        <hr className="mt-4" />
        {/* <footer>
          <Bio className="mt-8 mb-16" />
        </footer> */}
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const pageData = getPageBySlug(slug);
  return { props: pageData };
}

export async function getStaticPaths() {
  const paths = getPagesSlugs();

  return {
    paths,
    fallback: false,
  };
}

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../content/assets/${src}`)}
    webpSrc={require(`../content/assets/${src}?webp`)}
    previewSrc={require(`../content/assets/${src}?lqip`)}
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
