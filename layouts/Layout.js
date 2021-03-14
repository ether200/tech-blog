import React from "react";
import Header from "../components/Header";
import Preview from "../components/Preview";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col ll:flex-row ll:space-x-8">
        {children}
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
