import React from "react";
import Image from "next/image";

const Recent = () => {
  return (
    <section>
      <div className="relative text-center mb-4">
        <h2 className="uppercase font-medium text-gray-800 dark:text-gray-100 inline-block bg-white px-2 dark:bg-gray-900">
          recent
        </h2>
        <div className="h-0.5 mb-4 bg-green-500 w-full absolute top-1/2 -z-1"></div>
      </div>
      <div className="flex flex-col space-y-4">
        {/* START */}
        <a href="#" className="relative w-full flex space-x-2">
          <Image
            layout="fixed"
            height={44}
            width={75}
            className="rounded-sm"
            src="/tailwind.png"
            alt="IT IS ME"
          />
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-gray-100 capitalize font-semibold text-xs">
              tailwind css
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              May 11th, 2020
            </span>
          </div>
        </a>
        {/* END */}
        <a href="#" className="relative w-full flex space-x-2">
          <Image
            layout="fixed"
            height={44}
            width={75}
            className="rounded-sm"
            src="/tailwind.png"
            alt="IT IS ME"
          />
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-gray-100  capitalize font-semibold text-xs">
              tailwind css
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              May 11th, 2020
            </span>
          </div>
        </a>
        <a href="#" className="relative w-full flex space-x-2">
          <Image
            layout="fixed"
            height={44}
            width={75}
            className="rounded-sm"
            src="/tailwind.png"
            alt="IT IS ME"
          />
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-gray-100  capitalize font-semibold text-xs">
              tailwind css
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              May 11th, 2020
            </span>
          </div>
        </a>
        <a href="#" className="relative w-full flex space-x-2">
          <Image
            layout="fixed"
            height={44}
            width={75}
            className="rounded-sm"
            src="/tailwind.png"
            alt="IT IS ME"
          />
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-gray-100  capitalize font-semibold text-xs">
              tailwind css
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              May 11th, 2020
            </span>
          </div>
        </a>
        <a href="#" className="relative w-full flex space-x-2">
          <Image
            layout="fixed"
            height={44}
            width={75}
            className="rounded-sm"
            src="/tailwind.png"
            alt="IT IS ME"
          />
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-gray-100  capitalize font-semibold text-xs">
              tailwind css
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              May 11th, 2020
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Recent;
