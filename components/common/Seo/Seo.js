import Head from "next/head";
import fs from "fs";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  const isHomePage = () => {
    if (title == siteMetadata.title) {
      return <title>{siteMetadata.title}</title>;
    } else {
      return (
        <title>
          {title} | {siteMetadata.title}
        </title>
      );
    }
  };

  return (
    <Head>
      {isHomePage()}
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
    </Head>
  );
}
