import React from "react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <section>
      <div className="relative text-center mb-4">
        <h2 className="uppercase font-medium text-gray-800 dark:text-gray-100 inline-block bg-gray-50 px-2 dark:bg-gray-900">
          categories
        </h2>
        <div className="h-0.5 mb-4 bg-green-500 w-full absolute top-1/2 -z-1"></div>
      </div>
      <div className="grid grid-cols-2 gap-1 justify-center items-center">
        {categories &&
          categories.map((category) => (
            <Link
              href={`/blog/category/${category.toLowerCase()}`}
              key={category}
            >
              <a className="uppercase mb-2 px-4 text-gray-500 dark:text-gray-300 overflow-hidden">
                {category}
              </a>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Categories;
