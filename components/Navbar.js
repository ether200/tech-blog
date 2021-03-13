import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full py-5 border-gray-300 border-b">
      <div className="space-x-3">
        <Link href="/">
          <a className="text-sm uppercase font-semibold text-gray-600 hover:text-gray-900">
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-sm uppercase font-semibold text-gray-600 hover:text-gray-900">
            Blog
          </a>
        </Link>
      </div>
      <button
        className="border-2 border-green-500 p-1 rounded-full"
        onClick={() => console.log("clicked!")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 fill-current text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
