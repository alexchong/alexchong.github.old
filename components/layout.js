import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-3xl px-6 md:px-9 md:py-5">
        {children}
      </main>
    </>
  );
}
