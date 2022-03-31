import React from "react";
import GoBackBtn from "../../src/components/GoBackBtn";

export default function ramadantabak() {
  return (
    <div>
      <div className="text-2xl text-center font-bold my-[1em] mt-[4em]">
        Ramadan Tabak Ad
      </div>

      <div className="mx-auto px-[1em] mb-[2em] max-w-[30em] sm:h-[30em] h-[25em] ">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/taw0NltN3lA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          
        ></iframe>
      </div>

      <div className="mx-auto w-max transition-all duration-150">
        <GoBackBtn />
      </div>
    </div>
  );
}
