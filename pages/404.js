import React from "react";
import svg from "../public/imgs/under_construction_.svg";
import Image from "next/image";
import BlueButton from "../src/Buttons/BlueButton";

import useTranslation from "next-translate/useTranslation";
export default function ErrorPage() {
  const { t, lang } = useTranslation("common");
  return (
    <div className="w-full gap-4 h-full px-4 flex justify-center items-center flex-col py-[4em]">
      <div className="img md:w-[20em] w-[14em]">
        <Image src={svg} layout="responsive" />
      </div>
      <div className="text-2xl text-center text-[#857fee] font-bold">
        {t("404.title")}
      </div>
      <BlueButton text={t("404.btn")} link="/" />
    </div>
  );
}
