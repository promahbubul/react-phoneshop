import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
