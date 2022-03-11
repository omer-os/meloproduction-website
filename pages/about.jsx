import React from "react";
import whoWeAreBg from "../public/imgs/who-we-are-bg.jpg";
import Image from "next/image";
import BlueButton from "../src/Buttons/BlueButton";




export default function WhoWeAre() {
  return (
    <div className="w-full flex flex-col my-[2.5em] items-center">
      <div className="img md:w-5/12 w-9/12">
        <Image src={whoWeAreBg} layout="responsive" />
      </div>

      <div className="flex flex-col md:w-5/12 w-9/12 mt-4 gap-5">
        <div>
          <div className="text-xl text-blue-600">Who Are We?</div>
          <div className="text-lg">
            We are a cross-functional team, skilled in fields involving the
            production and marketing of visual digital and non-digital content.
          </div>
        </div>

        <div>
          <div className="text-xl text-blue-600">Our mission</div>
          <div className="text-lg">
            We make great effort to innovate new ways in marketing and
            advertising. .
          </div>
        </div>

        <div>
          <div className="text-xl text-blue-600">Our Policy</div>
          <div className="text-lg">
            Our policy aims to present our services to clients that are aware of
            the importance of having a brand in which they would market their
            products and services through.
          </div>
        </div>

        <div className="mx-auto">
          <BlueButton link="/services" text="See Our Services" />
        </div>
      </div>
    </div>
  );
}
