import { ServicesSecTitle } from "../src/components/ServicesSecTitle";
import { Sec1 } from "../src/components/Sec1";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Hr from "../src/components/Hr";
import WhoWeAreComponent from "../src/components/WhoWeAreComponent";
import WhyPeopleChooseUs from "../src/components/WhyPeopleChooseUs";
import OurClintes from "../src/components/OurClintes";
import ContactUsSection from "../src/components/ContactUsSection";
import useInView from "react-cool-inview";
import ServicesSection from "../src/components/ServicesSection";
import dynamic from "next/dynamic";
import Head from "next/head";
import GoUpButton from "../src/components/GoUpButton";

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
      <Head>
        <title>{t("page-title")}</title>
        <meta name="description" content={t("about")} />
      </Head>

      <Sec1 />

      <Hr />
      <ServicesSecTitle />
      <ServicesSection />
      <WhoWeAreComponent />
      <WhyPeopleChooseUs />

      <div ref={observe}>{inView && <OurWorkSection />}</div>

      <Hr />

      <OurClintes />
      <BGrothSection />
      <ContactUsSection />

      <GoUpButton />
    </>
  );
}
