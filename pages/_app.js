import { ThemeProvider } from "next-themes";

import "@assets/main.css";

import "typeface-open-sans";
import "typeface-merriweather";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
