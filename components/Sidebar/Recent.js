import React from "react";
import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";

const Recent = ({ recentPosts }) => {
  return (
    <section>
      <div className="relative text-center mb-4">
        <h2 className="uppercase font-medium text-gray-800 dark:text-gray-100 inline-block bg-gray-50 px-2 dark:bg-gray-900">
          recent
        </h2>
        <div className="h-0.5 mb-4 bg-green-500 w-full absolute top-1/2 -z-1"></div>
      </div>
      <div className="flex flex-col space-y-4">
        {recentPosts &&
          recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a className="relative w-full flex space-x-2 shadow-sm">
                <Image
                  layout="fixed"
                  height={44}
                  width={75}
                  className="rounded-sm overflow-hidden "
                  src={post.image}
                  alt="IT IS ME"
                />
                <div>
                  <h3 className="text-gray-800 dark:text-gray-100 capitalize font-semibold text-xs">
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-300">
                    {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                  </span>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Recent;
