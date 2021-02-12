import Document, { Head, Main, NextScript, Html } from "next/document";
import { TypographyStyle } from "react-typography";
import { typography } from "@utils/typography";

import { getSiteMetaData } from "@utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language} className="h-full">
        <Head>
          <TypographyStyle typography={typography} />
        </Head>
        <body className="h-full overflow-visible static bg-stickyNote dark:bg-pidgin-dark dark:text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
