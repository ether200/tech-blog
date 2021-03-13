import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <div className="container mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  );
}

export default MyApp;
