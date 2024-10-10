import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import LoaderImg from "../images/1474.gif"

const Layout = ({ children }) => {
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <div className="flex flex-col justify-center items-center w-screen h-screen mx-auto">
          <img
            quality={100}
            layout="constrained"
            alt="hero"
            className="w-20"
            src={LoaderImg}
          />
          <span className="animate-pulse">Loading..</span>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Nav />
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
