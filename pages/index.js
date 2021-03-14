import Head from "next/head";
import Layout from "../layouts/Layout";
import Preview from "../components/Preview";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>My Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Preview />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
