import React from "react";
import { FaFacebook, FaPinterest, FaX, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="my-16">
      <ul className="flex justify-center items-center ">
        <li className="mr-2">
          {" "}
          <FaFacebook size={24} />{" "}
        </li>
        <li className="mr-2">
          {" "}
          <FaPinterest size={24} />{" "}
        </li>
        <li className="mr-2">
          {" "}
          <FaX size={24} />{" "}
        </li>
        <li>
          {" "}
          <FaInstagram size={24} />
        </li>
      </ul>
      <p className="text-center text-lg font-semibold my-2">Made by Olamide </p>
    </div>
  );
};

export default Footer;
