import React from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Nav />
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
