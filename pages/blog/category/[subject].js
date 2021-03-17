import { useRouter } from "next/router";
import Head from "next/head";
import { getAllFilesFrontMatter, getAllCategories } from "../../../lib/mdx";
import Layout from "../../../layouts/Layout";
import Preview from "../../../components/Preview";

export default function Category({ posts, categories, filteredPosts }) {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        recentPosts={posts.slice(0, 5)}
        categories={categories}
        headerTitle={`category: ${query.subject}`}
      >
        <Preview posts={filteredPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getAllFilesFrontMatter("blog");
  const categories = [...new Set(posts.map((post) => post.subject))];
  const filteredPosts = posts.filter(
    (post) => post.subject.toLowerCase() === params.subject
  );

  return {
    props: {
      posts,
      categories,
      filteredPosts,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getAllCategories("blog");

  return {
    paths: categories.map((subject) => ({
      params: {
        subject: subject.toLowerCase(),
      },
    })),
    fallback: false,
  };
}
