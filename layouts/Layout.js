import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children, recentPosts, categories, headerTitle }) => {
  return (
    <>
      <Header headerTitle={headerTitle} />
      <div className="flex flex-col ll:flex-row ll:space-x-8">
        {children}
        <Sidebar recentPosts={recentPosts} categories={categories} />
      </div>
    </>
  );
};

export default Layout;
