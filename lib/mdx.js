import fs from "fs";
import matter from "gray-matter";
import path from "path";
import mdxPrism from "mdx-prism";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "../components/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "data", type));

  const posts = await files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);

  return posts.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
}

export async function getAllCategories(type) {
  const files = fs.readdirSync(path.join(root, "data", type));

  const categories = await files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [data.subject, ...allPosts];
  }, []);

  return [...new Set(categories)];
}
