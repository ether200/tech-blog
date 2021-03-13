import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentlyPublished = () => {
  return (
    <div className="my-7">
      <h2 className="text-2xl uppercase text-green-500 mb-7">
        recently published
      </h2>
      <div className="flex flex-col ll:flex-row ll:space-x-8">
        <div className="flex flex-col">
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
              <span className="mt-2 uppercase rounded-md text-gray-500 font-semibold lg:mt-0">
                tailwind
              </span>
              <h2 className="my-2 uppercase font-medium text-gray-800 text-2xl lg:my-4">
                tailwind css
              </h2>
              <div className="h-0.5 w-16 mb-4 bg-gray-300"></div>
              <p className="text-gray-600 lg:mb-4">
                Learn why I switched my Next.js blog to use Tailwind CSS and how
                it impacted performance.
              </p>
              <a className="my-2 cursor-pointer text-green-500 uppercase hover:text-green-600 lg:my-0">
                Read More
              </a>
              <div className="w-full border-t border-gray-300 flex justify-between mt-auto text-gray-500 font-semibold lg:pt-5 ">
                <span>May 11th, 2020</span>
                <span>22 min read</span>
              </div>
            </div>
          </article>
          {/* Cut HERE */}
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
              <span className="mt-2 uppercase rounded-md text-gray-500 font-semibold lg:mt-0">
                tailwind
              </span>
              <h2 className="my-2 uppercase font-medium text-gray-800 text-2xl lg:my-4">
                tailwind css
              </h2>
              <div className="h-0.5 w-16 mb-4 bg-gray-300"></div>
              <p className="text-gray-600 lg:mb-4">
                Learn why I switched my Next.js blog to use Tailwind CSS and how
                it impacted performance.
              </p>
              <a className="my-2 cursor-pointer text-green-500 uppercase hover:text-green-600 lg:my-0">
                Read More
              </a>
              <div className="w-full border-t border-gray-300 flex justify-between mt-auto text-gray-500 font-semibold lg:pt-5 ">
                <span>May 11th, 2020</span>
                <span>22 min read</span>
              </div>
            </div>
          </article>
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
              <span className="mt-2 uppercase rounded-md text-gray-500 font-semibold lg:mt-0">
                tailwind
              </span>
              <h2 className="my-2 uppercase font-medium text-gray-800 text-2xl lg:my-4">
                tailwind css
              </h2>
              <div className="h-0.5 w-16 mb-4 bg-gray-300"></div>
              <p className="text-gray-600 lg:mb-4">
                Learn why I switched my Next.js blog to use Tailwind CSS and how
                it impacted performance.
              </p>
              <a className="my-2 cursor-pointer text-green-500 uppercase hover:text-green-600 lg:my-0">
                Read More
              </a>
              <div className="w-full border-t border-gray-300 flex justify-between mt-auto text-gray-500 font-semibold lg:pt-5 ">
                <span>May 11th, 2020</span>
                <span>22 min read</span>
              </div>
            </div>
          </article>
        </div>
        {/* Sidebar */}
        <aside className="grid grid-cols-auto gap-8 justify-center my-6 ll:w-60 ll:flex ll:flex-col ll:justify-start ll:space-y-4 ll:my-0">
          {/* ABOUT ME */}
          <div>
            <div className="relative text-center mb-4">
              <h2 className="uppercase font-medium text-gray-800 inline-block bg-white px-2">
                about me
              </h2>
              <div className="h-0.5 mb-4 bg-green-500 w-full absolute top-1/2 -z-1"></div>
            </div>
            <div className="w-24 h-24 relative mx-auto">
              <Image
                layout="fill"
                objectFit="fill"
                src="/me.jpg"
                alt="IT IS ME"
                className="rounded-full"
              />
            </div>
            <p className="text-center my-4 text-gray-500">
              Second best in the world!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 text-gray-800 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          {/* RECENT */}
          <div>
            <div className="relative text-center mb-4">
              <h2 className="uppercase font-medium text-gray-800 inline-block bg-white px-2">
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
                  <h3 className="text-gray-800 capitalize font-semibold text-xs">
                    tailwind css
                  </h3>
                  <span className="text-xs text-gray-500">May 11th, 2020</span>
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
                  <h3 className="text-gray-800 capitalize font-semibold text-xs">
                    tailwind css
                  </h3>
                  <span className="text-xs text-gray-500">May 11th, 2020</span>
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
                  <h3 className="text-gray-800 capitalize font-semibold text-xs">
                    tailwind css
                  </h3>
                  <span className="text-xs text-gray-500">May 11th, 2020</span>
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
                  <h3 className="text-gray-800 capitalize font-semibold text-xs">
                    tailwind css
                  </h3>
                  <span className="text-xs text-gray-500">May 11th, 2020</span>
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
                  <h3 className="text-gray-800 capitalize font-semibold text-xs">
                    tailwind css
                  </h3>
                  <span className="text-xs text-gray-500">May 11th, 2020</span>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="relative text-center mb-4">
              <h2 className="uppercase font-medium text-gray-800 inline-block bg-white px-2">
                categories
              </h2>
              <div className="h-0.5 mb-4 bg-green-500 w-full absolute top-1/2 -z-1"></div>
            </div>
            <div className="grid grid-cols-2 gap-1 justify-center items-center">
              <a
                href="#"
                className="uppercase mb-2 px-4 text-gray-500 overflow-hidden"
              >
                react
              </a>
              <a
                href="#"
                className="uppercase mb-2 px-4 text-gray-500 overflow-hidden"
              >
                nextjs
              </a>
              <a
                href="#"
                className="uppercase mb-2 px-4 text-gray-500 overflow-hidden"
              >
                redux
              </a>
              <a
                href="#"
                className="uppercase mb-2 px-4 text-gray-500 overflow-hidden"
              >
                tailwind
              </a>
              <a
                href="#"
                className="uppercase mb-2 px-4 text-gray-500 overflow-hidden"
              >
                nodejs
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RecentlyPublished;
