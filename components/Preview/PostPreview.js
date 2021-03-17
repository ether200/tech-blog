import React from "react";
import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";

const PostPreview = ({
  image,
  subject,
  publishedAt,
  summary,
  title,
  writtenBy,
  slug,
}) => {
  return (
    <article className="flex flex-col mb-6 w-full lg:space-x-5 lg:flex-row">
      <div className="relative rounded-md w-full shadow-xl h-80 md:h-97 lg:flex-shrink-0 lg:w-99 lg:h-80">
        <Image
          layout="fill"
          objectFit="fill"
          src={image}
          alt="Article pic"
          className=" rounded-sm overflow-hidden"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full ">
        <h2 className="my-2 uppercase font-medium text-gray-800 dark:text-gray-100 text-2xl lg:mt-0 lg:mb-4">
          {title}
        </h2>
        <span className="text-gray-500 dark:text-gray-300 text-sm">
          Written by {writtenBy}
        </span>
        <div className="h-0.5 w-16 my-5 bg-gray-300"></div>
        <p className="text-gray-500 dark:text-gray-300 lg:mb-4">{summary}</p>
        <Link href={`/blog/${slug}`}>
          <a className="my-4 cursor-pointer text-green-500 uppercase hover:text-green-600 lg:my-0">
            Read More
          </a>
        </Link>
        <div className="w-full border-t border-gray-300 flex mt-auto justify-center lg:justify-end text-gray-500 dark:text-gray-300 font-semibold lg:pt-5 ">
          <span className="my-2">
            {format(parseISO(publishedAt), "MMMM dd, yyyy")}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
