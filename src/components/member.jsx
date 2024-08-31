import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Member = () => {
  return (
    <div class="grid md:grid-cols-3 xs:grid-cols-1 text-center lg:mx-60">
      <div className="">
        <h2 className="my-4">Name</h2>
        <StaticImage
          className="md:w-36 xs:w-48 xs:my-2 md:my-0"
          src="../images/bandmember.jpg"
          alt="member"
        />
      </div>
      <div className="">
        <h2 className="my-4">Name</h2>
        <StaticImage
          className="md:w-36 xs:w-48 xs:my-2 md:my-0"
          src="../images/bandmember.jpg"
          alt="member"
        />
      </div>
      <div className="">
        <h2 className="my-4">Name</h2>
        <StaticImage
          className="md:w-36 xs:w-48 xs:my-2 md:my-0"
          src="../images/bandmember.jpg"
          alt="member"
        />
      </div>
    </div>
  );
};

export default Member;
