import React from "react";
import Navbar from "./Navbar";

const Header = ({ headerTitle }) => {
  return (
    <>
      <Navbar />
      <div className="p-5 text-center border-gray-300 border-b">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide text-gray-800 dark:text-gray-100">
          Hey, I'm <span className="text-green-500">Iván</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          This is the space where I keep all the web development related posts
          that I find interesting.
        </p>
      </div>
      <h2 className="text-2xl uppercase text-center lg:text-left text-green-500 my-7">
        {headerTitle ? headerTitle : ""}
      </h2>
    </>
  );
};

export default Header;
