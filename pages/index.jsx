import { ServicesSecTitle } from "../src/components/ServicesSecTitle";
import { ServicesBox } from "../src/components/ServicesBox.jsx";
import { Sec1 } from "../src/MainComponents/Sec1";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import homeSvg from "../public/imgs/home-person-svg.svg";
import Hr from "../src/components/Hr";

import graphicIcon from "../public/imgs/graphicIcon.webP";
import videosIcon from "../public/imgs/videosIcon.webP";
import metaIcon from "../public/imgs/metaIcon.webP";
import brandIcon from "../public/imgs/brandIcon.webP";
import modelingIcon from "../public/imgs/modelingIcon.webP";
import dataIcon from "../public/imgs/dataIcon.webP";
import webdevIcon from "../public/imgs/webdevIcon.webP";
import customerIcon from "../public/imgs/customerIcon.webP";
import socialIcon from "../public/imgs/socialIcon.webP";

export default function index() {
  const { t, lang } = useTranslation("home");

  console.log(typeof(modelingIcon));

  return (
    <>
      <Sec1 homeSvg={homeSvg} />
      <Hr />

      <ServicesSecTitle t={t} />

      {/* socialIcon */}
      {/* videosIcon */}
      {/* graphicIcon */}
      {/* metaIcon */}
      {/* brandIcon */}
      {/* dataIcon */}
      {/* webdevIcon */}
      {/* modelingIcon */}
      {/* customerIcon */}

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[35px] gap-[20px] p-[30px] lg:px-[5em]">
        {/* 
translate pattern is:
services-boxes:[
  {
    title:"s",
    body:"d"
  }
]


*/}

        <ServicesBox
          title={t("services-boxes.0.title")}
          description={t("services-boxes.0.description")}
          socialIcon={socialIcon}
        />

        <ServicesBox
          title={t("services-boxes.0.title")}
          description={t("services-boxes.0.description")}
          socialIcon={videosIcon}
        />

        <ServicesBox
          title={t("services-boxes.0.title")}
          description={t("services-boxes.0.description")}
          socialIcon={graphicIcon}
        />

        <ServicesBox
          title={t("services-boxes.1.title")}
          description={t("services-boxes.1.description")}
          socialIcon={metaIcon}
        />

        <ServicesBox
          title={t("services-boxes.2.title")}
          description={t("services-boxes.2.description")}
          socialIcon={brandIcon}
        />

        <ServicesBox
          title={t("services-boxes.3.title")}
          description={t("services-boxes.3.description")}
          socialIcon={dataIcon}
        />

        <ServicesBox
          title={t("services-boxes.4.title")}
          description={t("services-boxes.4.description")}
          socialIcon={webdevIcon}
        />

        <ServicesBox
          title={t("services-boxes.5.title")}
          description={t("services-boxes.5.description")}
          socialIcon={modelingIcon}
        />

        <ServicesBox
          title={t("services-boxes.6.title")}
          description={t("services-boxes.6.description")}
          socialIcon={customerIcon}
        />





      </div>
    </>
  );
}
