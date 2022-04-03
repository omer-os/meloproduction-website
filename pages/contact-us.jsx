import React from "react";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import {
phoneIcon,
mailIcon,
locationIcon,
insta,
facebook,
linkdin,
youtube,
} from "../public/ImageImports";


export default function ContactUs() {
  const { t, lang } = useTranslation("contact");

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full my-[2em] flex items-center flex-col"
    >
      <div className="flex flex-col gap-3 justify-center text-center my-[3em]">
        <div className="text-2xl font-bold">
          {t("contact-us-section.title")}
        </div>

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
    </div>
  );
}
