import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import React from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return (
    <nav className="flex justify-between items-center w-full py-5 border-gray-300 border-b">
      <div className="space-x-3">
        <Link href="/">
          <a className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-300">
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-300">
            Blog
          </a>
        </Link>
      </div>
      <button
        className="border-2 border-green-500 p-1 rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 fill-current text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {theme === "dark" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
