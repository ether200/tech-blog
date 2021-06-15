import React from "react";
import About from "./About";
import Categories from "./Categories";
import Recent from "./Recent";

const Sidebar = ({ recentPosts, categories }) => {
  return (
    <aside
      className="grid grid-cols-auto gap-8 justify-center my-6 ll:w-60 ll:flex ll:flex-col ll:justify-start ll:space-y-4 ll:my-0 ll:sticky top-0"
      style={{ height: "fit-content" }}
    >
      <About />
      <Recent recentPosts={recentPosts} />
      <Categories categories={categories} />
    </aside>
  );
};

export default Sidebar;
