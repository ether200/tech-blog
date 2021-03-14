import Image from "next/image";

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <article className="flex flex-col w-full">
      <div className="relative w-full h-80 sm:h-96 md:h-99">
        <Image
          layout="fill"
          objectFit="fill"
          src={frontMatter.image}
          alt="Article pic"
          className="rounded-md"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="mt-6 uppercase rounded-md text-gray-500 dark:text-gray-300 font-semibold">
          {frontMatter.subject}
        </span>
        <h2 className="my-4 uppercase font-medium text-gray-800 dark:text-gray-100 text-2xl">
          {frontMatter.title}
        </h2>
        <div className="h-0.5 w-16 mb-4 bg-gray-300"></div>
      </div>
      <div className="prose my-8">{children}</div>
    </article>
    // <div>
    //   <h1>{frontMatter.title}</h1>
    //   <div className="prose w-full">{children}</div>
    // </div>
  );
};

export default BlogLayout;
