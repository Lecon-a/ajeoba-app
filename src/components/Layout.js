import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = () => {
  return (
    <>
      <div className="layout-wrapper">
        <div>
          <div className="row layout-inner-wrapper">
            <div className="sidebar-wrapper p-0">
              <Sidebar />
            </div>
            <div className="main-wrapper">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
