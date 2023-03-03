import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import HorizontalDivider from "./HorizontalDivider";
// dummy data
import menus from "./db/sidebarTabs";

const Sidebar = () => {

  const [tabs] = useState(menus)

  const handleClick = (e) => {
    document.querySelectorAll(".links").forEach((link) => {
      link.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
  };

  const lis = tabs.map((tab, index) => {
    return (
      <li key={index} id={tab}>
        <Link
          className="links d-flex gap-30 align-items-center justify-content-start"
          to={tab.title}
          onClick={handleClick}
        >
          {tab.image}
          <h4 className="m-0">
            {tab.title[0].toUpperCase() +
              tab.title.slice(1, tab.title.length + 1)}
          </h4>
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="row d-flex flex-column p-0 m-0 text-white position-fixed">
        <div className="col-12 align-items-center d-flex gap-12 logo-block">
          <div className="logo">
            <div className="logo-D"></div>
          </div>
          <h1 className="m-0 sidebar-text-logo">Dashboard Kit</h1>
        </div>
        <div className="col-12 px-0">
          <ul className="sidebar-upper-list m-0">{lis}</ul>
          <HorizontalDivider width="100" />
          <ul className="sidebar-upper-list m-0 sidebar-lower-list">
            <li>
              <Link
                className="links d-flex gap-30 align-items-center justify-content-start"
                to=""
                onClick={handleClick}
              >
                <IoMdSettings className="fs-3" />
                <h4 className="m-0">Settings</h4>
              </Link>
            </li>
            <li>
              <Link
                className="links d-flex gap-30 align-items-center justify-content-start"
                to=""
                onClick={handleClick}
              >
                <MdSubscriptions className="fs-3" />
                <h4 className="m-0">Subscription</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
