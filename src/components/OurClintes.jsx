import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ClinetBox from "./ClinetBox";
import useTranslation from "next-translate/useTranslation";
import {
  clinet1,
  clinet2,
  clinet3,
  clinet4,
  clinet5,
  clinet6,
  clinet7,
  clinet8,
  clinet9,
  clinet10,
} from "../../public/ImageImports";

export default function OurClintes() {
  const [Width, setWidth] = useState(0);
  const coursel = useRef();
  const { t, lang } = useTranslation("home");
  useEffect(() => {
    return setWidth(coursel.current.scrollWidth - coursel.current.offsetWidth);
  }, []);

  const clinets = [
    {
      imgAlt: "raji logo",
      img: clinet1,
    },
    {
      imgAlt: "valvoline logo",
      img: clinet2,
    },
    {
      imgAlt: "baba konafa logo",
      img: clinet3,
    },
    {
      imgAlt: "suran university logo",
      img: clinet4,
    },
    {
      imgAlt: "fuad logo",
      img: clinet5,
    },
    {
      imgAlt: "clinet 6",
      img: clinet6,
    },
    {
      imgAlt: "Frez mix logo",
      img: clinet7,
    },
    {
      imgAlt: "al tabakh logo",
      img: clinet8,
    },
    {
      imgAlt: "abu ud logo",
      img: clinet9,
    },
    {
      imgAlt: "enishtien logo",
      img: clinet10,
    },
  ];

  return (
    <div className="my-[2em] flex flex-col">
      <h1 className="text-2xl mx-auto font-bold my-3">
        {t("our-clinets.title")}
      </h1>

      <div
        className="
        sm:w-8/12 
        w-11/12
        rounded-xl p-4 mx-auto flex overflow-x-hidden justify-center"
      >
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          ref={coursel}
          drag="x"
          dragConstraints={{
            right: 0,
            left: -Width,
          }}
          className="flex cursor-grab w-full gap-4 sm:px-2 py-2"
        >
          {clinets.map((clinet) => {
            return (
              <ClinetBox
                alt={clinet.imgAlt}
                img={clinet.img}
                key={clinet.imgAlt.replace(" ", "-")}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
