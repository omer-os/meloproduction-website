import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

// importing images
import {
  insta,
  facebook,
  linkdin,
  youtube,
  phoneIcon,
  mailIcon,
  locationIcon,
} from "../../public/ImageImports";

export default function ContactUsSection() {
  const { t } = useTranslation("home");

  return (
    <div className="flex flex-col gap-3 justify-center text-center my-[3em]">
      <div className="text-2xl font-bold">{t("contact-us-section.title")}</div>

      

      {[
        {
          href: "https://goo.gl/maps/m2DBWByGsFYZhr6BA",
          icon: locationIcon,
          alt: "location icon",
          text: "Kornish St. Kirkuk, Iraq",
        },
        {
          href: "mailto:info@meloproduction.me",
          icon: mailIcon,
          alt: "mail icon",
          text: "info@meloproduction.me",
        },
        {
          href: "tell:+964-770-580-3570",
          icon: phoneIcon,
          alt: "phone icon",
          text: "+964-770-580-3570",
        },
      ].map((item) => {
        return (
          <a
            href={item.href}
            className="flex w-max mx-auto hover:underline cursor-pointer justify-center gap-2 text-xl"
          >
            <Image src={item.icon} alt={item.alt} width={15} height={15} />
            {item.text}
          </a>
        );
      })}











      <div className="flex justify-center gap-3">
        <a
          href="https://instagram.com/meloproduction.me"
          className="w-[1.09em]"
        >
          <Image src={insta} alt="instagram" layout="responsive" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCKI6WkBDez7ER_0CvZ3xp7A"
          className="w-[1.4em]"
        >
          <Image src={youtube} alt="youtube" layout="responsive" />
        </a>
        <a
          href="https://www.linkedin.com/company/melo-production-me"
          className="w-[.98em]"
        >
          <Image src={linkdin} alt="linkedin" layout="responsive" />
        </a>
        <a href="https://facebook.com/MeloPrduction" className="w-[.5em]">
          <Image src={facebook} alt="facebook" layout="responsive" />
        </a>
      </div>




    </div>
  );
}
