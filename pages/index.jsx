import React from "react";
import Hr from "../src/components/Hr";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";

const BGrothSection = dynamic(() => import("../src/components/BGrothSection"));
const OurWorkSection = dynamic(() =>
  import("../src/components/OurWorkSection")
);
const WhoWeAreComponent = dynamic(() =>
  import("../src/components/WhoWeAreComponent")
);
const WhyPeopleChooseUs = dynamic(() =>
  import("../src/components/WhyPeopleChooseUs")
);
const OurClintes = dynamic(() => import("../src/components/OurClintes"));
const ContactUsSection = dynamic(() =>
  import("../src/components/ContactUsSection")
);
const ServicesSection = dynamic(() =>
  import("../src/components/ServicesSection")
);
const Sec1 = dynamic(() => import("../src/components/Sec1"));
const ServicesSecTitle = dynamic(() =>
  import("../src/components/ServicesSecTitle")
);
const GoUpButton = dynamic(() => import("../src/components/GoUpButton"));

export default function Index() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <>
      <Sec1 />

      <Hr />
      <ServicesSecTitle />
      <ServicesSection />
      <WhoWeAreComponent />
      <WhyPeopleChooseUs />
      <div ref={observe}>{inView && <OurWorkSection />}</div>
      <OurClintes />
      <BGrothSection />
      <ContactUsSection />

      <GoUpButton />
    </>
  );
}
