import React from "react";
import CurrentTab from "./CurrentTab";
import Menu from "./Menu";

const Header = (props) => {
  
  return (
    <>
      {props.activeTab &&
        <div className="header-wrapper">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div>
                <CurrentTab title={props.activeTab} />
              </div>
              <div><Menu /></div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Header;
