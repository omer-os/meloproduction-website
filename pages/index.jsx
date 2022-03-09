import { ServicesSecTitle } from "../src/components/ServicesSecTitle";
import { Sec1 } from "../src/MainComponents/Sec1";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import homeSvg from "../public/imgs/home-person-svg.svg";
import Hr from "../src/components/Hr";
import Head from "next/head";
import WhoWeAreComponent from "../src/components/WhoWeAreComponent";
import WhyPeopleChooseUs from "../src/components/WhyPeopleChooseUs";
import OurClintes from "../src/components/OurClintes";
import ContactUsSection from "../src/components/ContactUsSection";
import useInView from "react-cool-inview";
import ServicesSection from "../src/components/ServicesSection";
import dynamic from "next/dynamic";

const BGrothSection = dynamic(() => import("../src/components/BGrothSection"));
const OurWorkSection = dynamic(() =>
  import("../src/components/OurWorkSection")
);

export default function index() {
  const { t, lang } = useTranslation("home");

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

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

      <ServicesSection t={t} />
      <WhoWeAreComponent />
      <WhyPeopleChooseUs />
      <div ref={observe}>{inView && <OurWorkSection />}</div>
      <Hr />

      <OurClintes />

      <BGrothSection />

      <ContactUsSection />
    </>
  );
}
