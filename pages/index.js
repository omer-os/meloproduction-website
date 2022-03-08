import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function index() {
  const { t, lang } = useTranslation("common");
  const title = t("title");

  return <div className="">{title}</div>;
}
