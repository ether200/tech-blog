import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="relative text-center mb-4">
        <h2 className="uppercase font-medium text-gray-800 dark:text-gray-100 inline-block bg-gray-50 px-2 dark:bg-gray-900">
          about me
        </h2>
        <div className="h-0.5 mb-4 bg-green-500 w-full absolute top-1/2 -z-1"></div>
      </div>
      <div className="w-24 h-24 relative mx-auto">
        <Image
          layout="fill"
          objectFit="fill"
          src="/me2.jpg"
          alt="IT IS ME"
          className="rounded-full"
        />
      </div>
      <p className="text-center my-4 text-gray-500 dark:text-gray-300">
        I'm a Web Developer from Argentina. Feel free to contact me.
      </p>
      <div className="flex justify-center w-full">
        <a href="https://github.com/ether200" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-6 fill-current text-gray-800 dark:text-gray-200"
          >
            <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default About;
