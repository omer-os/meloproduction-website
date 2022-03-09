import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export function Sec1({ homeSvg }) {
  const { t, lang } = useTranslation("home");

  return (
    <div
      dir={`${lang === "ar" ? "rtl" : "ltr"}`}
      className="flex justify-center items-center h-[90vh]  ssm:flex-row flex-col-reverse xs:px-[4em] px-[2em] ssm:gap-none gap-[2em]"
    >
      <div className="left flex flex-col gap-4 xl:w-4/12 lg:w-5/12 md:w-6/12 ssm:w-7/12">
        <h1
          className={`
        ${lang === "ar" ? "ssm:text-right" : "ssm:text-left"}
        md:text-4xl ssm:text-3xl text-2xl font-bold text-center`}
        >
          {t("title")}
        </h1>
        <h2
          className={`
        ${lang === "ar" ? "ssm:text-right" : "ssm:text-left"}
        ssm:text-xl text-lg text-gray-500 ssm:text-left text-center`}
        >
          {t("about")}
        </h2>

        <div className="flex capitalize ssm:justify-start justify-center gap-3">
          <button className="flex justify-between items-center text-white bg-blue-600 py-1 md:px-4 px-2 md:text-lg rounded capitalize font-bold">
            {t("btn-1")}
          </button>
          <button className="flex justify-between items-center text-white bg-blue-600  py-1  md:px-4 px-2 md:text-lg rounded capitalize font-bold">
            {t("btn-2")}
          </button>
        </div>
      </div>

      <div className="right  xl:w-[300px] lg:w-[250px] md:min-w-[250px] min-w-[200px]">
        <Image
          src={homeSvg}
          alt="man holding paper"
          placeholder="blur"
          blurDataURL
          layout="responsive"
        />
      </div>
    </div>
  );
}
