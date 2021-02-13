import ReactMarkdown from "react-markdown/with-html";
// import { useRouter } from "next/router";
import { getPageBySlug, getPagesSlugs } from "@utils/pages";
import { Layout, SEO, Bio } from "@components/common";

export default function Page({ page, frontmatter }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || page.excerpt}
      />
      <article className="article">
        <header className="mb-8">
          <h1 className="mb-2 text-2xl md:text-3xl font-bold leading-none">
            {frontmatter.title}
          </h1>
          {/* <p className="text-sm">{frontmatter.date}</p> */}
        </header>
        <ReactMarkdown
          className="mb-4 prose text-lg md:text-xl lg:prose-lg dark:prose-dark"
          escapeHtml={false}
          source={page.content}
          renderers={{ image: MarkdownImage }}
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
