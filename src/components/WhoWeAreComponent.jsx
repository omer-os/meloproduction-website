import React from "react";
import useTranslation from "next-translate/useTranslation";
import WhiteButton from "../Buttons/WhiteButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoWeAreComponent() {
  const { t, lang } = useTranslation("home");

  return (
    <motion.div
      whileInView={{
        y: [10, 0],
        opacity: [0, 1],
        transition: {
          ease: "easeInOut",
        },
      }}
      className="bg-blue-600 px-[2em] w-full items-center gap-3 flex py-4 flex-col text-center text-white"
    >
      <h1 className="text-2xl font-bold">{t("who-we-are.title")}</h1>

      <p className="text-xl lg:w-2/6 sm:w-4/6">{t("who-we-are.description")}</p>

      <Link passHref href="/about">
        <a>
          <WhiteButton text={t("who-we-are.btn")} />
        </a>
      </Link>
    </motion.div>
  );
}
