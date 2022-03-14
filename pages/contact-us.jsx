import React from "react";
import MailImg from "../public/imgs/contact-mail.png";
import Image from "next/image";
import Hr from "../src/components/Hr";
import BlueButton from "../src/Buttons/BlueButton";
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'
import phoneIcon from "/public/imgs/icons/phone-icon.svg";
import mailIcon from "/public/imgs/icons/mail-icon.svg";
import locationIcon from "/public/imgs/icons/location-icon.svg";
import insta from "../public/imgs/icons/insta.svg";
import facebook from "../public/imgs/icons/facebook.svg";
import linkdin from "../public/imgs/icons/linkdin.svg";
import youtube from "../public/imgs/icons/youtube.svg";



export default function ContactUs() {
  const { t, lang } = useTranslation("contact");

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full my-[2em] flex items-center flex-col"
    >
      <div className="flex md:flex-row flex-col gap-5">
        <div className="mail-img w-[20em]">
          <Image src={MailImg} layout="responsive" />
        </div>
        <div className="flex gap-4 flex-col">
          <div className="text-2xl font-bold">{t("title")}</div>
          <input
            type="email"
            className="border rounded text-xl font-thin px-2 py-1"
            placeholder={t("email")}
            required
          />
          <input
            type="text"
            className="border rounded text-xl font-thin px-2 py-1"
            placeholder={t("name")}
            required
          />
          <textarea
            type="text"
            className="border h-[4em] rounded text-xl font-thin px-2 py-1"
            placeholder={t("subject")}
            required
          />

          <BlueButton text={t("btn")} link="none" />
        </div>
      </div>

      <br />
      <br />
      <Hr />
      <br />
      <br />

      <div className="flex flex-col gap-3 justify-center text-center my-[3em]">
        <div className="text-2xl font-bold">
          {t("contact-us-section.title")}
        </div>

        <Link href="https://goo.gl/maps/m2DBWByGsFYZhr6BA">
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
