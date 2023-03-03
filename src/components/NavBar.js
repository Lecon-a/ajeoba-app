import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { VscBellDot } from "react-icons/vsc";
import HorizontalDivider from "./HorizontalDivider";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-white fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2>Ajeoba</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end mt-5"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header mt-4 mb-0 px-4">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Ajeoba
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mt-0">
              <ul className="navbar-nav justify-content-end flex-grow-1 mt-0 p-0">
                <li className="nav-item">
                  <Link
                    className="dropdown-item nav-link px-2 py-3 d-flex flex-column"
                    to="/overview"
                    aria-current="page"
                  >
                    <h4 className="m-0">Overview</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-2 py-3 d-flex flex-column"
                    to="/tickets"
                    aria-current="page"
                  >
                    <h4 className="m-0">Tickets</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-2 py-3 d-flex flex-column"
                    to="/tickets"
                    aria-current="page"
                  >
                    <h4 className="m-0">Ideas</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-2 py-3 d-flex flex-column"
                    to="/tickets"
                    aria-current="page"
                  >
                    <h4 className="m-0">Contacts</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-2 py-3 d-flex flex-column"
                    to="/tickets"
                    aria-current="page"
                  >
                    <h4 className="m-0">Agents</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-2 py-3 d-flex flex-column"
                    to="/tickets"
                    aria-current="page"
                  >
                    <h4 className="m-0">Articles</h4>
                  </Link>
                </li>
                <HorizontalDivider />
                <li className="nav-item">
                  <Link
                    className="nav-link px-2 py-3 d-flex flex-column"
                    to="/tickets"
                    aria-current="page"
                  >
                    <h4 className="m-0">Settings</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-2 py-3 d-flex flex-column"
                    to="/tickets"
                    aria-current="page"
                  >
                    <h4 className="m-0">Subscription</h4>
                  </Link>
                </li>
              </ul>
              <div className="d-flex p-3 gap-30">
                <CiSearch className="fs-2" />
                <VscBellDot className="fs-2" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
