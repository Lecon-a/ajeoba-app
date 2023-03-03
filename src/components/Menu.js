import React from "react";
import { CiSearch } from "react-icons/ci";
import { VscBellDot } from "react-icons/vsc";
import VerticalDivider from "./VerticalDivider";

const Menu = () => {
  return (
    <>
      <div className="header-menu-left">
        <div className="search-notification-operator d-flex gap-30">
          <CiSearch className="fs-3" />
          <VscBellDot className="fs-3" />
        </div>
        <VerticalDivider height="42" className="gap-30" />

        <div className="active-user-info gap-12">
          <h5 className="username">Username</h5>
          <div className="user-image">
            <img className="img-fluid" src="images/user_01.jpg" alt="user" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
