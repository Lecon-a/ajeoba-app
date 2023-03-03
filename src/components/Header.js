import React from "react";
import CurrentTab from "./CurrentTab";
import Menu from "./Menu";
import NavBar from "./NavBar";

const Header = (props) => {
  
  return (
    <>
      <div className="nav-hide">
        <NavBar />
      </div>
      {props.activeTab && (
        <div className="header-wrapper details-hide">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div>
                <CurrentTab title={props.activeTab} />
              </div>
              <div>
                <Menu />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
