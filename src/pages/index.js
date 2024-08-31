import React from "react";
import Layout from "../components/layout";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Hero from "../components/hero";
import Member from "../components/member";
import Card from "../components/card";
import Form from "../components/form";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <Layout>
      <section>
        <Hero emblaRef={emblaRef} />
      </section>
      <section className="md:my-20 xs:my-7 md:w-3/6 xs:px-5 md:px-2 mx-auto">
        <h1 className="uppercase text-3xl text-center">The Band</h1>
        <h3 className="italic text-gray-600 my-4 text-center">We love music</h3>
        <p className="text-sm">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation.
        </p>
      </section>
      <section className="my-28">
        <Member />
      </section>
      <section className="bg-black text-white pb-10 md:px-1 xs:px-4">
        <div className=" text-center pt-16">
          <h1 className="text-4xl font-sans">TOUR DATES</h1>
          <h3 className="italic text-gray-600 my-4">
            Remember to book your tickets!
          </h3>
        </div>
        <div>
          <ul className="lg:w-3/5 mx-auto bg-white my-8">
            <li className="border border-gray-400 py-2 px-3">
              <span className=" text-gray-600 font-semibold">September</span>
              <span className="bg-red-600 ml-8 p-1">Sold out</span>
            </li>
            <li className="border border-gray-400 py-2 px-3">
              <span className=" text-gray-600 font-semibold">October</span>
              <span className="bg-red-600 ml-8 p-1">Sold out</span>
            </li>
            <li className="border border-gray-400 py-2 px-3">
              <span className=" text-gray-600 font-semibold">November</span>
              <span className="ml-8 bg-black px-2 py-1 rounded-full font-semibold">
                3
              </span>
            </li>
          </ul>
        </div>
        <Card />
      </section>
      <section className="my-20">
        <div className="my-5 text-center ">
          <h1 className="text-4xl uppercase">Contact</h1>
          <h4 className="my-5 italic ">Fan? Drop a note!</h4>
        </div>
        <div>
          <Form />
        </div>
      </section>
      <section>
        <StaticImage quality={90} className="w-full" src="../images/map.jpg" />
      </section>
    </Layout>
  );
};

export default Index;
