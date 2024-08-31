import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = ({ emblaRef }) => {
  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container text-white">
          <div className="embla__slide relative">
            <StaticImage
              quality={100}
              layout="constrained"
              alt="hero"
              className="lg:w-full md:h-full h-80 bg-bottom"
              src="../images/la.jpg"
            />
            <p className="md:absolute md:opacity-100 xs:opacity-0 bottom-5 left-1/4 right-1/4 text-center">
              <span className="block text-2xl mb-2">Los Angeles</span>
              <span className="">
                We had the best time playing at Venice Beach!
              </span>
            </p>
          </div>
          <div className="embla__slide relative">
            <StaticImage
              quality={100}
              alt="hero"
              transformOptions="cover"
              className="lg:w-full md:h-full h-80 bg-bottom"
              src="../images/ny.jpg"
            />
            <p className="md:absolute md:opacity-100 xs:opacity-0 bottom-5 left-1/4 right-1/4 text-center">
              <span className="block text-2xl mb-2">New York</span>
              <span className="">
                The atmosphere in New York is lorem ipsum.
              </span>
            </p>
          </div>
          <div className="embla__slide relative">
            <StaticImage
              quality={100}
              alt="hero"
              transformOptions="cover"
              className="lg:w-full md:h-full h-80 bg-bottom"
              src="../images/chicago.jpg"
            />
            <p className="md:absolute md:opacity-100 xs:opacity-0 bottom-5 left-1/4 right-1/4 ml-2 text-center">
              <span className="block text-2xl mb-2">Chicago</span>
              <span className="">
                Thank you, Chicago- A night we won't forget.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
