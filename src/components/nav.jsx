import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";

const Nav = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="w-full relative">
      <nav
        className={`fixed z-50 w-screen flex md:bg-black xs:${
          checked ? `bg-black` : `bg-white`
        } text-gray-300 justify-between items-center md:pb-0 xs:pb-10 px-7`}
      >
        <ul
          className={`flex md:flex-row xs:flex-col font-bold md:opacity-100 xs:${
            checked ? `opacity-100` : `opacity-0`
          } `}
        >
          <li className="mr-7 pt-7 pb-3 md:py-4 px-3 hover:bg-gray-600 hover:text-white transition-all duration-200">
            Home
          </li>
          <li className="mr-7 py-3 md:py-4 px-3 hover:bg-gray-600 hover:text-white transition-all duration-200">
            Band
          </li>
          <li className="mr-7 py-3 md:py-4 px-3 hover:bg-gray-600 hover:text-white transition-all duration-200">
            Tour
          </li>
          <li className="mr-7 py-3 md:py-4 px-3 hover:bg-gray-600 hover:text-white transition-all duration-200">
            Contact
          </li>
          <li className="mr-7 py-3 md:py-4 px-3 hover:bg-gray-600 hover:text-white transition-all duration-200">
            More
          </li>
        </ul>
        <div
          className={`md:opacity-0 xs:${
            checked ? `opacity-100` : `opacity-0`
          }  absolute top-0 bg-black left-0 right-0 h-80 w-screen transition-all duration-150 -z-10`}
        ></div>
        <div className="py-3 px-3">
          <button className="absolute right-10 top-4 xs:opacity-0 md:opacity-100">
            <MdSearch size={25} />
          </button>
        </div>
        <div>
          <div></div>
          <button
            className="fixed md:hidden right-5 top-4 md:w-0 text-gray-400"
            onClick={handleChecked}
          >
            {checked ? <RiCloseFill size={35} /> : <RiMenu4Line size={35} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
