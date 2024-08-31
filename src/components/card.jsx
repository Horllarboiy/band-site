import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./button";

const Card = () => {
  return (
    <div className="py-12 flex xs:flex-col md:flex-row justify-center items-center">
      <div className="md:w-60 xs:w-full bg-white text-black md:mr-12 xs:my-4 md:my-1">
        <StaticImage
          quality={100}
          alt="Img"
          transformOptions="cover"
          src="../images/newyork.jpg"
        />
        <div className="mx-4">
          <h2 className="font-bold my-3 text-base">New York</h2>
          <h3 className="text-sm text-gray-600 mb-3">Fri 27 Oct July</h3>
          <p className="text-sm">
            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </p>
          <Button name="Buy Tickets" />
        </div>
      </div>
      <div className="md:w-60 xs:w-full bg-white text-black md:mr-12 xs:my-4 md:my-1">
        <StaticImage
          quality={100}
          alt="Img"
          transformOptions="cover"
          className=""
          src="../images/paris.jpg"
        />
        <div className="mx-4">
          <h2 className="font-bold my-3 text-base">Paris</h2>
          <h3 className="text-sm text-gray-600 mb-3">Fri 27 Nov 2023</h3>
          <p className="text-sm ">
            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </p>
          <Button name="Buy Tickets" />
        </div>
      </div>
      <div className="md:w-60 xs:w-full bg-white text-black xs:my-4 md:my-1">
        <StaticImage
          quality={100}
          alt="Img"
          transformOptions="cover"
          src="../images/sanfran.jpg"
        />
        <div className="mx-4">
          <h2 className="font-bold my-3 text-base">San Francisco</h2>
          <h3 className="text-sm text-gray-600 mb-3">Fri 27 June 2024</h3>
          <p className="text-sm">
            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </p>
          <Button name="Buy Tickets" />
        </div>
      </div>
    </div>
  );
};

export default Card;
