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
import { motion } from "framer-motion";

import useTranslation from "next-translate/useTranslation";

function ServicesSection() {
  const { t } = useTranslation("home");

  const services = [
    {
      Icon: socialIcon,
      Title: t("services-boxes.0.title"),
      Description: t("services-boxes.0.description"),
    },
    {
      Icon: videosIcon,
      Title: t("services-boxes.1.title"),
      Description: t("services-boxes.1.description"),
    },
    {
      Icon: graphicIcon,
      Title: t("services-boxes.2.title"),
      Description: t("services-boxes.2.description"),
    },
    {
      Icon: metaIcon,
      Title: t("services-boxes.3.title"),
      Description: t("services-boxes.3.description"),
    },
    {
      Icon: brandIcon,
      Title: t("services-boxes.4.title"),
      Description: t("services-boxes.4.description"),
    },
    {
      Icon: dataIcon,
      Title: t("services-boxes.5.title"),
      Description: t("services-boxes.5.description"),
    },
    {
      Icon: webdevIcon,
      Title: t("services-boxes.6.title"),
      Description: t("services-boxes.6.description"),
    },
    {
      Icon: modelingIcon,
      Title: t("services-boxes.7.title"),
      Description: t("services-boxes.7.description"),
    },
    {
      Icon: customerIcon,
      Title: t("services-boxes.8.title"),
      Description: t("services-boxes.8.description"),
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[35px] gap-[20px] p-[30px] lg:px-[5em]">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
        >
          <ServicesBox
            icon={service.Icon}
            title={service.Title}
            description={service.Description}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesSection;
