import React from "react";
import About from "./About";
import Categories from "./Categories";
import Recent from "./Recent";

const Sidebar = () => {
  return (
    <aside className="grid grid-cols-auto gap-8 justify-center my-6 ll:w-60 ll:flex ll:flex-col ll:justify-start ll:space-y-4 ll:my-0">
      {/* ABOUT ME */}
      <About />
      {/* RECENT */}
      <Recent />
      {/* now */}
      <Categories />
    </aside>
  );
};

export default Sidebar;
