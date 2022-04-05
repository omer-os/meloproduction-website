import React, { useState } from "react";
import Image from "next/image";

import {
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
  proj15,
} from "./imgs/demo-graphic-set/ImageImports";

// import {ClearRoundedIcon} from "@mui/icons-material/ClearRounded";
// import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function DemoGraphicSet() {
  const [ShowImg, setShowImg] = useState(null);
  const { lang } = useTranslation();

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
    proj15,
  ];

  const text = {
    en: {
      title: "Demo Graphic Set",
      about:
        "collection of graphic design sets that we have worked on our clinets. click on the image to see it in full size.",
    },
    ar: {
      title: "مجموعة تصميم الجرافيك التقريبية",
      about:
        "مجموعة من مجموعات التصميم الجرافيكي التي عملنا عليها على عملائنا. اضغط على الصورة لرؤيتها بالحجم الكامل",
    },
  };

  return (
    <div className="sm:px-[4em] px-[2em]">
      <h1 className="mt-[3em] font-bold text-2xl text-center">
        {lang === "ar" ? text.ar.title : text.en.title}
      </h1>
      <h2 className="text-xl text-center max-w-[20em] mx-auto mt-[.5em]">
        {lang === "ar" ? text.ar.about : text.en.about}
      </h2>
      <div className="grid my-[2em] max-w-[700px] gap-[1em] relative mx-auto md:grid-cols-3 sm:grid-cols-2 ">
        {imgs.map((img, i) => (
          <motion.div
            whileInView={{
              scale: [0.8, 1],
              opacity: [0, 1],
            }}
            key={i}
            className="relative cursor-zoom-in"
            onClick={() => {
              setShowImg(img);
            }}
          >
            <Image
              src={img}
              layout="responsive"
              className="absolute top-0 left-0"
              alt={`project ${i}`}
            />
          </motion.div>
        ))}


        {/* image zoom in fix later */}

        {/* {ShowImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            className="img-preview top-0 left-0 fixed z-[1000] w-screen h-screen bg-black/80 flex justify-center items-center"
            onClick={() => setShowImg(null)}
          >
            <div className="img relative sm:w-[400px]  sm:h-[500px] xs:w-[300px] xs:h-[400px] w-[300px] h-[400px] ">
              <Image
                alt="Image preview"
                src={ShowImg}
                layout="fill"
                className="max-w-[700px] m-[1em]"
              />
              <div className="absolute left-0 top-0">
                <IconButton color="inherit" onClick={() => setShowImg(null)}>
                  <ClearRoundedIcon
                    fontSize="large"
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </motion.div>
        )} */}
      </div>
      <div className="mx-auto mb-[2em] w-max">
        <Link href="/hire-us">
          <a>
            <Button
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              start working with us
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
