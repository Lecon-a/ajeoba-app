import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer className="main-footer">Ajeoba&copy;2023</footer>
    </>
  );
};

export default Main;
