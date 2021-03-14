import React from "react";
import Image from "next/image";

const PostPreview = () => {
  return (
    <article className="flex flex-col mb-6 w-full lg:space-x-5 lg:flex-row">
      <div className="relative w-full h-80 md:h-97 lg:flex-shrink-0 lg:w-99 lg:h-80">
        <Image
          layout="fill"
          objectFit="fill"
          src="/tailwind.png"
          alt="Article pic"
          className="rounded-md"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <span className="mt-2 uppercase rounded-md text-gray-500 dark:text-gray-300 font-semibold lg:mt-0">
          tailwind
        </span>
        <h2 className="my-2 uppercase font-medium text-gray-800 dark:text-gray-100 text-2xl lg:my-4">
          tailwind css
        </h2>
        <div className="h-0.5 w-16 mb-4 bg-gray-300"></div>
        <p className="text-gray-500 dark:text-gray-300 lg:mb-4">
          Learn why I switched my Next.js blog to use Tailwind CSS and how it
          impacted performance.
        </p>
        <a className="my-2 cursor-pointer text-green-500 uppercase hover:text-green-600 lg:my-0">
          Read More
        </a>
        <div className="w-full border-t border-gray-300 flex justify-between mt-auto text-gray-500 dark:text-gray-300 font-semibold lg:pt-5 ">
          <span>May 11th, 2020</span>
          <span>22 min read</span>
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
