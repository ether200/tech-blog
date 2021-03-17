import Layout from "../layouts/Layout";
import Head from "next/head";
import Preview from "../components/Preview";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Blog({ posts, categories }) {
  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        recentPosts={posts.slice(0, 5)}
        categories={categories}
        headerTitle={"all posts"}
      >
        <Preview posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const categories = [...new Set(posts.map((post) => post.subject))];
  return { props: { posts, categories } };
}
