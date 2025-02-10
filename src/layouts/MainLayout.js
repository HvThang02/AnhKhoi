import React from "react";
import Navbar from "../components/Navbar";
import FooterLayout from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-secondary overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main className="w-full pt-[125px] sm:pt-[145px] md:pt-[155px] lg:pt-[175px]">
        {children}
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </div>
  );
};

export default Layout;
