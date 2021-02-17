import Head from "next/head";
import { Header } from "@components/common";

export function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header />
      <main className="container z-1 mx-auto max-w-3xl px-6 md:px-9 py-5 md:py-10">
        {props.children}
      </main>
    </>
  );
}
