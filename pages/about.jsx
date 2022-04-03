import React from "react";
import Image from "next/image";
import BlueButton from "../src/Buttons/BlueButton";
import useTranslation from "next-translate/useTranslation";
import {
  whoWeAreBg,
} from "../public/ImageImports";


export default function WhoWeAre() {
  const { t, lang } = useTranslation("about");

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full flex flex-col my-[2.5em] items-center"
    >
      <div className="img md:w-5/12 w-9/12">
        <Image alt="image of working people" src={whoWeAreBg} layout="responsive" />
      </div>

      <div className="flex flex-col md:w-5/12 w-9/12 mt-4 gap-5">
        <div>
          <div className="text-xl text-blue-600">{t("who-we-are.title")}</div>
          <div className="text-lg">{t("who-we-are.body")}</div>
        </div>

        <div>
          <div className="text-xl text-blue-600">{t("our-mission.title")}</div>
          <div className="text-lg">{t("our-mission.body")} </div>
        </div>

        <div>
          <div className="text-xl text-blue-600">{t("our-policy.title")}</div>
          <div className="text-lg">{t("our-policy.body")}</div>
        </div>

        <div className="mx-auto">
          <BlueButton link="/services" text={t("btn")} />
        </div>
      </div>

    </div>
  );
}
