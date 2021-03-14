import React from "react";

const Categories = () => {
  return (
    <section>
      <div className="relative text-center mb-4">
        <h2 className="uppercase font-medium text-gray-800 dark:text-gray-100 inline-block bg-white px-2 dark:bg-gray-900">
          categories
        </h2>
        <div className="h-0.5 mb-4 bg-green-500 w-full absolute top-1/2 -z-1"></div>
      </div>
      <div className="grid grid-cols-2 gap-1 justify-center items-center">
        <a
          href="#"
          className="uppercase mb-2 px-4 text-gray-500 dark:text-gray-300 overflow-hidden"
        >
          react
        </a>
        <a
          href="#"
          className="uppercase mb-2 px-4 text-gray-500 dark:text-gray-300 overflow-hidden"
        >
          nextjs
        </a>
        <a
          href="#"
          className="uppercase mb-2 px-4 text-gray-500 dark:text-gray-300 overflow-hidden"
        >
          redux
        </a>
        <a
          href="#"
          className="uppercase mb-2 px-4 text-gray-500 dark:text-gray-300 overflow-hidden"
        >
          tailwind
        </a>
        <a
          href="#"
          className="uppercase mb-2 px-4 text-gray-500 dark:text-gray-300 overflow-hidden"
        >
          nodejs
        </a>
      </div>
    </section>
  );
};

export default Categories;
