import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import Preview from "./Preview";

const RecentlyPublished = () => {
  return (
    <>
      <h2 className="text-2xl uppercase text-green-500 my-7">
        recently published
      </h2>
      <div className="flex flex-col ll:flex-row ll:space-x-8">
        {/* POSTS */}
        <Preview />
        {/* Sidebar */}
        <Sidebar />
      </div>
    </>
  );
};

export default RecentlyPublished;
