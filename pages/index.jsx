import { ServicesSecTitle } from "../src/components/ServicesSecTitle";
import { Sec1 } from "../src/components/Sec1";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Hr from "../src/components/Hr";
import Head from "next/head";
import WhoWeAreComponent from "../src/components/WhoWeAreComponent";
import WhyPeopleChooseUs from "../src/components/WhyPeopleChooseUs";
import OurClintes from "../src/components/OurClintes";
import ContactUsSection from "../src/components/ContactUsSection";
import useInView from "react-cool-inview";
import ServicesSection from "../src/components/ServicesSection";
import dynamic from "next/dynamic";
import Meta from "../src/components/Meta";

const BGrothSection = dynamic(() => import("../src/components/BGrothSection"));
const OurWorkSection = dynamic(() =>
  import("../src/components/OurWorkSection")
);

export default function Index() {
  const { t, lang } = useTranslation("home");

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      {/* <Meta
        title={t("page-title")}
        desc={t("about")}
        css="/static/css/styles.css"
        js="/static/js/scripts.js"
      /> */}

      <Sec1 />
      <Hr />
      <ServicesSecTitle />
      <ServicesSection />
      <WhoWeAreComponent />
      <WhyPeopleChooseUs />

      {/* load it when needed */}
      <div ref={observe}>{inView && <OurWorkSection />}</div>

      <Hr />

      <OurClintes />
      <BGrothSection />
      <ContactUsSection />
    </>
  );
}
