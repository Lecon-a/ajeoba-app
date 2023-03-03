import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Tickets from "./pages/Tickets";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
