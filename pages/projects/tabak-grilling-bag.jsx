import { Skeleton } from "@mui/material";
import React from "react";

export const Frame = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/e7e3YDTIYcU"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default function tabakGrilling() {
  return (
    <div>
      <div className="text-2xl text-center font-bold my-[1em] mt-[4em]">
      Al Tabakh Tea Ad – Sketch
      </div>

      <div className="mx-auto px-[1em] mb-[2em] max-w-[30em] sm:h-[30em] h-[25em] ">
        {
          <Frame /> ? (
            <Frame />
          ) : (
            <Skeleton variant="rect" width="100%" height="100%" />
          )
        }
      </div>

    </div>
  );
}