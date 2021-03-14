import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="p-5 text-center border-gray-300 border-b">
        <h1 className="text-5xl font-bold mb-3 tracking-wide text-gray-800 dark:text-gray-100">
          Hey, I'm <span className="text-green-500">Iván</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          This is my personal blog where I write tech related stuff that I feel
          like i'll need in some future
        </p>
      </div>
      <h2 className="text-2xl uppercase text-green-500 my-7">
        recently published
      </h2>
    </>
  );
};

export default Header;
