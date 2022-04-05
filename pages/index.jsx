import {
  Sec1,
  BGrothSection,
  OurWorkSection,
  WhoWeAreComponent,
  WhyPeopleChooseUs,
  OurClintes,
  ContactUsSection,
  ServicesSection,
  ServicesSecTitle,
  GoUpButton,
  Hr,
} from "../src/ComponentFiles";

export default function Index() {
  return (
    <>
      <Sec1 />
      <Hr />
      <ServicesSecTitle />
      <ServicesSection />
      <WhoWeAreComponent />
      <WhyPeopleChooseUs />
      <OurWorkSection />
      <OurClintes />
      <BGrothSection />
      <ContactUsSection />
      {/* <GoUpButton /> */}
    </>
  );
}
