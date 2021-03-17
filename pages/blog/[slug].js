import hydrate from "next-mdx-remote/hydrate";
import Head from "next/head";
import { getFiles, getFileBySlug, getAllFilesFrontMatter } from "../../lib/mdx";
import BlogLayout from "../../layouts/blog";
import Layout from "../../layouts/Layout";
import MDXComponents from "../../components/MDXComponents";

export default function Blog({ post, posts, categories }) {
  const content = hydrate(post.mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      <Head>
        <title>{post.frontMatter.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout recentPosts={posts.slice(0, 5)} categories={categories}>
        <BlogLayout frontMatter={post.frontMatter}>{content}</BlogLayout>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);
  const posts = await getAllFilesFrontMatter("blog");
  const categories = [...new Set(posts.map((post) => post.subject))];

  return {
    props: {
      post,
      posts,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}
