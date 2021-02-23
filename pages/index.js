import Link from "next/link";
import { Layout, Hero, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article
          className="mb-4 pb-4 border-b border-gray dark:border-gray-500"
          key={slug}
        >
          <Link href={"/post/[slug]"} as={`/post/${slug}`}>
            <a className="text-2xl md:text-3xl hover:opacity-60">
              <header className="mb-2 text-black dark:text-white">
                <h2 className="mb-2">{title}</h2>
              </header>
              <section>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  {date}
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-200">
                  {description}
                </p>
              </section>
            </a>
          </Link>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}

// import Link from "next/link";

// import { Layout, Bio, SEO } from "@components/common";
// import { getSortedPosts } from "@utils/posts";

// export default function Home({ posts }) {
//   return (
//     <Layout>
//       <SEO title="All posts" />
//       <Bio className="my-14" />
//       {posts.map(({ frontmatter: { title, description, date }, slug }) => (
//         <article key={slug}>
//           <header className="mb-2">
//             <h3 className="mb-2">
//               <Link href={"/post/[slug]"} as={`/post/${slug}`}>
//                 <a className="text-4xl font-bold text-yellow-600 font-display">
//                   {title}
//                 </a>
//               </Link>
//             </h3>
//             <span className="text-sm">{date}</span>
//           </header>
//           <section>
//             <p className="mb-8 text-lg">{description}</p>
//           </section>
//         </article>
//       ))}
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const posts = getSortedPosts();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
