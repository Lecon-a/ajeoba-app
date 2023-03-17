import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = () => {
  return (
    <>
      <div className="layout-wrapper">
        <div className="row w-100 layout-inner-wrapper m-0 p-0">
          <div className="sidebar-wrapper p-0 sidebar-hide">
            <Sidebar />
          </div>
          <div className="main-wrapper">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
