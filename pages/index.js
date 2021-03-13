import Head from "next/head";
import RecentlyPublished from "../components/RecentlyPublished";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>My Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-5 text-center border-gray-300 border-b">
        <h1 className="text-5xl font-bold mb-3 tracking-wide text-gray-800">
          Hey, I'm <span className="text-green-500">Iván</span>
        </h1>
        <p className="text-gray-600">
          This is my personal blog where I write tech related stuff that I feel
          like i'll need in some future
        </p>
      </div>
      <RecentlyPublished />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
