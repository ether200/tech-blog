const BlogLayout = ({ children, frontMatter }) => {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <div className="prose w-full">{children}</div>
    </div>
  );
};

export default BlogLayout;
