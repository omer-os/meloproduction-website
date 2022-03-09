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
import Head from "next/head";
import WhoWeAreComponent from "../src/components/WhoWeAreComponent";
import WhyPeopleChooseUs from "../src/components/WhyPeopleChooseUs";
import OurWorkSection from "../src/components/OurWorkSection";
import OurClintes from "../src/components/OurClintes";
import BGrothSection from "../src/components/BGrothSection";
import ContactUsSection from "../src/components/ContactUsSection";

export default function index() {
  const { t, lang } = useTranslation("home");

  return (
    <>
      <Head>
        <title>{t("page-title")}</title>
        <meta
          name="description"
          content="We inspire brands and people to grow and develop. We are composed of cross-skilled individuals that focus on growing your brand."
        />
      </Head>
      <Sec1 homeSvg={homeSvg} />
      <Hr />

      <ServicesSecTitle t={t} />

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
      <WhoWeAreComponent lang={lang} t={t} />
      <WhyPeopleChooseUs lang={lang} t={t} />
      <OurWorkSection />
      <Hr />

      <OurClintes />
      <BGrothSection />
      <ContactUsSection/>
    </>
  );
}
