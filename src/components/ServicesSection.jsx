import React from "react";
import { ServicesBox } from "./ServicesBox";

import socialIcon from "../../public/imgs/services/socialIcon.png";
import videosIcon from "../../public/imgs/services/videosIcon.png";
import graphicIcon from "../../public/imgs/services/graphicIcon.png";
import metaIcon from "../../public/imgs/services/metaIcon.png";
import brandIcon from "../../public/imgs/services/brandIcon.png";
import dataIcon from "../../public/imgs/services/dataIcon.png";
import webdevIcon from "../../public/imgs/services/webdevIcon.png";
import modelingIcon from "../../public/imgs/services/modelingIcon.png";
import customerIcon from "../../public/imgs/services/customerIcon.png";

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
        title={t("services-boxes.1.title")}
        description={t("services-boxes.1.description")}
        imageAlt={t("services-boxes.1.title")}
        Icon={videosIcon}
      />

      <ServicesBox
        title={t("services-boxes.2.title")}
        description={t("services-boxes.2.description")}
        imageAlt={t("services-boxes.2.title")}
        Icon={graphicIcon}
      />

      <ServicesBox
        title={t("services-boxes.3.title")}
        description={t("services-boxes.3.description")}
        imageAlt={t("services-boxes.3.title")}
        Icon={metaIcon}
      />

      <ServicesBox
        title={t("services-boxes.4.title")}
        description={t("services-boxes.4.description")}
        imageAlt={t("services-boxes.4.title")}
        Icon={brandIcon}
      />

      <ServicesBox
        title={t("services-boxes.5.title")}
        description={t("services-boxes.5.description")}
        imageAlt={t("services-boxes.5.title")}
        Icon={dataIcon}
      />

      <ServicesBox
        title={t("services-boxes.6.title")}
        description={t("services-boxes.6.description")}
        imageAlt={t("services-boxes.6.title")}
        Icon={webdevIcon}
      />

      <ServicesBox
        title={t("services-boxes.7.title")}
        description={t("services-boxes.7.description")}
        imageAlt={t("services-boxes.7.title")}
        Icon={modelingIcon}
      />

      <ServicesBox
        title={t("services-boxes.8.title")}
        description={t("services-boxes.8.description")}
        imageAlt={t("services-boxes.8.title")}
        Icon={customerIcon}
      />
    </div>
  );
}

export default ServicesSection;
