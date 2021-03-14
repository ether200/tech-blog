import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <div className="container mx-auto px-6">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
