import React from "react";
import bgImg from "../../public/imgs/bg-pcs-img.jpg";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import RedButton from "./RedButton";
export default function BGrothSection() {
  const { t, lang } = useTranslation("home");
  return (
    <div className="w-full min-h-[20em] py-[1em] justify-center relative bg-cover px-[1em] sm:px-[3em] flex flex-col gap-3 text-white items-center text-center">
      <Image src={bgImg} priority layout="fill" />

      <div className="title sm:text-3xl text-2xl lg:max-w-[20em] z-20 font-bold">
        {t("Business-Growth-Section.title")}
      </div>
      <div className="text-lg mx-4 lg:max-w-[30em] z-20">
        {t("Business-Growth-Section.description")}
      </div>
      <Link href="/services">
        <a>
          <RedButton text={t("Business-Growth-Section.btn")} reversed />
        </a>
      </Link>
    </div>
  );
}
