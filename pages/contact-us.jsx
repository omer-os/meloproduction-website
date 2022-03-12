import React from "react";
import MailImg from "../public/imgs/contact-mail.png";
import Image from "next/image";
import Hr from "../src/components/Hr";
import BlueButton from "../src/Buttons/BlueButton";
import useTranslation from "next-translate/useTranslation";



export default function ContactUs() {
  const { t, lang } = useTranslation("contact");
  return (
    <div dir={lang==="ar"?"rtl":"ltr"} className="w-full my-[2em] flex items-center flex-col">
    <div className="flex gap-5">
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
    </div>
  );
}
