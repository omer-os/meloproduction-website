import React from "react";
import { ServicesBox } from "./ServicesBox";

import graphicIcon from "../../public/imgs/graphiIcon.webP";
import videosIcon from "../../public/imgs/vidsIcon.webP";
import metaIcon from "../../public/imgs/mtaIcon.webP";
import brandIcon from "../../public/imgs/brndIcon.webP";
import modelingIcon from "../../public/imgs/modlingIcon.webP";

import dataIcon from "../../public/imgs/dataIcon.webP";
import webdevIcon from "../../public/imgs/webdevIcon.webP";
import customerIcon from "../../public/imgs/customerIcon.webP";
import socialIcon from "../../public/imgs/socialIcon.webP";

import useTranslation from "next-translate/useTranslation";

function ServicesSection() {
  const { t } = useTranslation("home");
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[35px] gap-[20px] p-[30px] lg:px-[5em]">
      <ServicesBox
        title={t("services-boxes.0.title")}
        description={t("services-boxes.0.description")}
        imageAlt={t("services-boxes.0.title")}
        Icon={socialIcon}
      />

      <ServicesBox
        title={t("services-boxes.0.title")}
        description={t("services-boxes.0.description")}
        imageAlt={t("services-boxes.0.title")}
        Icon={videosIcon}
      />

      <ServicesBox
        title={t("services-boxes.0.title")}
        description={t("services-boxes.0.description")}
        imageAlt={t("services-boxes.0.title")}
        Icon={graphicIcon}
      />

      <ServicesBox
        title={t("services-boxes.1.title")}
        description={t("services-boxes.1.description")}
        imageAlt={t("services-boxes.1.title")}
        Icon={metaIcon}
      />

      <ServicesBox
        title={t("services-boxes.2.title")}
        description={t("services-boxes.2.description")}
        imageAlt={t("services-boxes.2.title")}
        Icon={brandIcon}
      />

      <ServicesBox
        title={t("services-boxes.3.title")}
        description={t("services-boxes.3.description")}
        imageAlt={t("services-boxes.3.title")}
        Icon={dataIcon}
      />

      <ServicesBox
        title={t("services-boxes.4.title")}
        description={t("services-boxes.4.description")}
        imageAlt={t("services-boxes.4.title")}
        Icon={webdevIcon}
      />

      <ServicesBox
        title={t("services-boxes.5.title")}
        description={t("services-boxes.5.description")}
        imageAlt={t("services-boxes.5.title")}
        Icon={modelingIcon}
      />

      <ServicesBox
        title={t("services-boxes.6.title")}
        description={t("services-boxes.6.description")}
        imageAlt={t("services-boxes.6.title")}
        Icon={customerIcon}
      />
    </div>
  );
}

export default ServicesSection;
