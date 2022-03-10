import React from "react";
import useTranslation from "next-translate/useTranslation";
export function ServicesSecTitle() {
  const { t } = useTranslation("home");

  return (
    <>
      <div className="text-3xl text-center font-bold pt-[40px]">
        {t("services")}
      </div>
      <div className="text-xl text-gray-600 max-w-[350px] m-auto text-center py-[20px]">
        {t("services-1")}
      </div>
    </>
  );
}
