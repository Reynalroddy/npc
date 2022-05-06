import React from "react";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
const Shared = () => {
  return (
    <section>
      <Navbar />
      <div className="dashboard">
        <Outlet />
      </div>
    </section>
  );
};

export default Shared;
