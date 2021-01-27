import Header from "./header";

export default function Layout({ children }) {
  return (
    <main className="container mx-auto max-w-2xl px-5 md:px-8 md:py-5">
      <Header />
      {children}
    </main>
  );
}
