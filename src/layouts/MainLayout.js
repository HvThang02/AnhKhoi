// src/layouts/Layout.js
import React from "react";
import Navbar from "../components/Navbar";
import FooterLayout from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-secondary overflow-x-hidden ">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <div className="w-full sm:pt-[145px] md:pt-[155px] lg:pt-[175px]">
        {children}
      </div>
      <footer>
        <FooterLayout />
      </footer>
    </div>
  );
};

export default Layout;
