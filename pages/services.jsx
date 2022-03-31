import React from "react";
import ServicesSection from "../src/components/ServicesSection";
import useTranslation from "next-translate/useTranslation";
import BlueButton from "../src/Buttons/BlueButton";
import GoUpButton from "../src/components/GoUpButton";

export default function Services() {
  const { t, lang } = useTranslation("services");

  return (
    <div className="my-4 flex flex-col items-center">
      <div className="title text-2xl font-bold text-center">{t("title")}</div>
      <div className="text-center lg:w-3/6 md:w-4/6 w-5/6 text-lg mt-2">
        {t("description")}
      </div>
      <br />
      <BlueButton text={t("btn")} link="/contact-us" />

      <ServicesSection />

      <GoUpButton />
    </div>
  );
}
