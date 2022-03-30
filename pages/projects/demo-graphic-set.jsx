import React from "react";
import Image from "next/image";
import { proj1 } from "./imgs/demo-graphic-set/proj1.jpg";
import { proj2 } from "./imgs/demo-graphic-set/proj2.jpg";
import { proj3 } from "./imgs/demo-graphic-set/proj3.jpg";
import { proj4 } from "./imgs/demo-graphic-set/proj4.jpg";
import { proj5 } from "./imgs/demo-graphic-set/proj5.jpg";
import { proj6 } from "./imgs/demo-graphic-set/proj6.jpg";
import { proj7 } from "./imgs/demo-graphic-set/proj7.jpg";
import { proj8 } from "./imgs/demo-graphic-set/proj8.jpg";
import { proj9 } from "./imgs/demo-graphic-set/proj9.jpg";
import { proj10 } from "./imgs/demo-graphic-set/proj10.jpg";
import { proj11 } from "./imgs/demo-graphic-set/proj11.jpg";
import { proj12 } from "./imgs/demo-graphic-set/proj12.jpg";
import { proj13 } from "./imgs/demo-graphic-set/proj13.jpg";
import { proj14 } from "./imgs/demo-graphic-set/proj14.jpg";

export default function DemoGraphicSet() {
  const imgs = [
    proj1,
    proj2,
    proj3,
    proj4,
    proj5,
    proj6,
    proj7,
    proj8,
    proj9,
    proj10,
    proj11,
    proj12,
    proj13,
    proj14,
  ];

  return (
    <div>
      <h1 className="mt-[3em] font-bold text-2xl text-center">
        Demo Graphic Design Set
      </h1>
      <h2 className="text-xl text-center max-w-[20em] mx-auto mt-[.5em]">
        collection of graphic design sets that we have worked on for our
        clinets. click on the image to see it in full size.{" "}
      </h2>

      <div
        className="grid my-[2em] max-w-[500px]
      grid-cols-3
      auto-rows-[200px]
      gap-[1em]
      relative
      "
      >
        {imgs.map((img, i) => (
          <div className="img relative">
            <Image
              src={img}
              width={200}
              height={200}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="project"
              onClick={() => {
                window.open(img, "_blank");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
