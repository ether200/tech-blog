import React from "react";
import PostPreview from "./PostPreview";

const Preview = ({ posts }) => {
  return (
    <div className="flex flex-col w-full">
      {posts && posts.map((post) => <PostPreview key={post.slug} {...post} />)}
    </div>
  );
};

export default Preview;
