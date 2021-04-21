import Image from "next/image";
import { parseISO, format } from "date-fns";

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <article className="flex flex-col w-full">
      <div className="relative rounded-md w-full h-80 sm:h-96 md:h-98 xl:h-99 shadow-xl">
        <Image
          layout="fill"
          objectFit="fill"
          src={frontMatter.image}
          alt="Article pic"
          className="overflow-hidden rounded-md"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="mb-4 mt-8 uppercase font-semibold text-gray-800 dark:text-gray-100 text-3xl">
          {frontMatter.title}
        </h2>
        <span className="text-gray-500 dark:text-gray-300">
          Written by {frontMatter.writtenBy}
        </span>
        <span className="text-gray-500 dark:text-gray-300 mt-4 mb-8 text-sm">
          {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
        </span>
        <div className="h-0.5 w-full bg-gray-300"></div>
      </div>
      <div className="prose my-8">{children}</div>
    </article>
  );
};

export default BlogLayout;
