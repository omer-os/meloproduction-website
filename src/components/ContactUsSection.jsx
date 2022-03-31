import React from "react";
import Image from "next/image";
import insta from "../../public/imgs/icons/insta.svg";
import facebook from "../../public/imgs/icons/facebook.svg";
import linkdin from "../../public/imgs/icons/linkdin.svg";
import youtube from "../../public/imgs/icons/youtube.svg";
import Link from "next/link";
import phoneIcon from "/public/imgs/icons/phone-icon.svg";
import mailIcon from "/public/imgs/icons/mail-icon.svg";
import locationIcon from "/public/imgs/icons/location-icon.svg";
import useTranslation from "next-translate/useTranslation";


export default function ContactUsSection() {
  const { t, lang } = useTranslation("home");

  return (
    <div className="flex flex-col gap-3 justify-center text-center my-[3em]">
      <div className="text-2xl font-bold">{t("contact-us-section.title")}</div>

      <Link passHref href="https://goo.gl/maps/m2DBWByGsFYZhr6BA">
        <div className="flex hover:underline cursor-pointer justify-center gap-2 text-xl">
          <Image
            src={locationIcon}
            alt="location icon"
            width={15}
            height={15}
          />
          Kornish St. Kirkuk, Iraq
        </div>
      </Link>

      <div className="flex hover:underline cursor-pointer justify-center gap-2 text-xl">
        <Image src={mailIcon} alt="mail icon" width={20} height={15} />
        info@meloproduction.me
      </div>
      <div className="flex hover:underline cursor-pointer justify-center gap-2 text-xl">
        <Image src={phoneIcon} alt="phone icon" width={15} height={15} />
        +964-770-580-3570
      </div>
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
