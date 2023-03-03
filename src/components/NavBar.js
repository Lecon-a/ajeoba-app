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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-lg-0 py-4 navbar-nav-scroll d-flex flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/overview"
                  aria-current="page"
                >
                  <h4 className="m-0">Overview</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/tickets"
                  aria-current="page"
                >
                  <h4 className="m-0">Tickets</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/tickets"
                  aria-current="page"
                >
                  <h4 className="m-0">Ideas</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/tickets"
                  aria-current="page"
                >
                  <h4 className="m-0">Contacts</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/tickets"
                  aria-current="page"
                >
                  <h4 className="m-0">Agents</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/tickets"
                  aria-current="page"
                >
                  <h4 className="m-0">Articles</h4>
                </Link>
              </li>
              <HorizontalDivider />
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/tickets"
                  aria-current="page"
                >
                  <h4 className="m-0">Settings</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-4 py-2 d-flex flex-column"
                  to="/tickets"
                  aria-current="page"
                >
                  <h4 className="m-0">Subscription</h4>
                </Link>
              </li>
            </ul>
            <div className="search-notification-operator d-flex gap-40 px-4">
              <CiSearch className="fs-3" />
              <VscBellDot className="fs-3" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
