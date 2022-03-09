import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function WhoWeAreComponent() {
  const { t, lang } = useTranslation("home");
  return (
    <div className="bg-blue-600 px-[2em] w-full items-center gap-3 flex py-4 flex-col text-center text-white">
      <h1 className="text-2xl font-bold">{t("who-we-are.title")}</h1>
      <p
        className="text-xl 
        lg:w-2/6
        sm:w-4/6
        "
      >
        {t("who-we-are.description")}
      </p>
      <button className="bg-white text-blue-600 border-2 border-blue-400 py-1 px-3 rounded text-lg">
        {t("who-we-are.btn")}
      </button>
    </div>
  );
}
