import React from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import RedButton from "../Buttons/RedButton";
import {bgImg} from "../../public/ImageImports";


export default function BGrothSection() {
  const { t, lang } = useTranslation("home");
  return (
    <div className="w-full min-h-[20em] py-[1em] justify-center relative bg-cover px-[1em] sm:px-[3em] flex flex-col gap-3 text-white items-center text-center">
      <Image alt="Image of working people" src={bgImg} priority layout="fill" />

      <div className="title sm:text-3xl text-2xl lg:max-w-[20em] z-20 font-bold">
        {t("Business-Growth-Section.title")}
      </div>
      <div className="text-lg mx-4 lg:max-w-[30em] z-20">
        {t("Business-Growth-Section.description")}
      </div>



      <Link passHref href="/services">
        <a className="mx-auto z-20 w-max">
          <RedButton text={t("Business-Growth-Section.btn")} reversed />
        </a>
      </Link>
    </div>
  );
}
