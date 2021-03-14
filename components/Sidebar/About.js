import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="relative text-center mb-4">
        <h2 className="uppercase font-medium text-gray-800 dark:text-gray-100 inline-block bg-white px-2 dark:bg-gray-900">
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
      <p className="text-center my-4 text-gray-500 dark:text-gray-300">
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
    </section>
  );
};

export default About;
