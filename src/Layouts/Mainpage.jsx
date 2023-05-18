import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Mainpage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[52vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Mainpage;
