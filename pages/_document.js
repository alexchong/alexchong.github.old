import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { render } from "react-dom";

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-stickyNote dark:bg-pidgin-dark dark:text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// export default function Document() {
//   return (
//     <Html>
//       <Head />
//       <body className="bg-white text-black dark:bg-black dark:text-white">
//         <Layout>
//           <Main />
//           <NextScript />
//         </Layout>
//       </body>
//     </Html>
//   );
// }
