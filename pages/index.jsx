import React from "react";
import useTranslation from "next-translate/useTranslation";
import homeSvg from "../public/imgs/home-person-svg.svg";
import Image from "next/image";
export default function index() {
  const { t, lang } = useTranslation("home");

  return (
    <div className="flex justify-center items-center h-[90vh]  xs:flex-row flex-col-reverse px-[2em] xs:gap-none gap-[2em]">
      <div
        className="left flex flex-col gap-4 xl:w-4/12 lg:w-5/12 md:w-6/12 xs:w-7/12 
      "
      >
        <div className="md:text-4xl sm:text-3xl text-2xl font-bold xs:text-left text-center">
          We inspire brands and people to grow and develop.
        </div>
        <div className=" sm:text-xl text-lg text-gray-500 xs:text-left text-center">
          We are composed of cross-skilled individuals that focus on growing
          your brand.
        </div>

        <div className="flex capitalize xs:justify-start justify-center gap-3">
          <button
            className="flex justify-between items-center text-white bg-blue-600 py-1 md:px-4 px-2 
          md:text-lg
          rounded capitalize font-bold"
          >
            hire us
          </button>
          <button
            className="flex justify-between items-center text-white bg-blue-600 
          py-1 
          md:px-4
          px-2
          md:text-lg rounded capitalize font-bold"
          >
            our services
          </button>
        </div>
      </div>

      <div
        className="right 
      xl:w-[300px]
      lg:w-[250px]
      md:min-w-[250px]
      min-w-[200px]
      "
      >
        <Image src={homeSvg} layout="responsive" />
      </div>
    </div>
  );
}
