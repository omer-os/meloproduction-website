import React from "react";
import GoBackBtn from "../../src/components/GoBackBtn";

export default function enshtiencafe() {
  return (
    <div>
      <div className="text-2xl text-center font-bold my-[1em] mt-[4em]">
        Chicken Home Kirkuk – Delivery Ad
      </div>

      <div className="mx-auto px-[1em] mb-[2em] max-w-[30em] sm:h-[30em] h-[25em] ">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2vqQWkSL2ss"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <div className="mx-auto w-max transition-all absolute top-[1.5em] left-[2em] duration-150">
        <GoBackBtn />
      </div>
    </div>
  );
}



