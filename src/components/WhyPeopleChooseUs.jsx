import React from "react";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import { WhyUsCard } from "./WhyUsCard";

export default function WhyPeopleChooseUs() {
  const { t, lang } = useTranslation("home");
  const whyUsCards = [
    {
      title: t("why-us.why-us-cards.0.title"),
      description: t("why-us.why-us-cards.0.description"),
      number: t("why-us.why-us-cards.0.card"),
    },
    {
      title: t("why-us.why-us-cards.1.title"),
      description: t("why-us.why-us-cards.1.description"),
      number: t("why-us.why-us-cards.1.card"),
    },
    {
      title: t("why-us.why-us-cards.2.title"),
      description: t("why-us.why-us-cards.2.description"),
      number: t("why-us.why-us-cards.2.card"),
    },
    {
      title: t("why-us.why-us-cards.3.title"),
      description: t("why-us.why-us-cards.3.description"),
      number: t("why-us.why-us-cards.3.card"),
    },
  ];

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="flex py-5 md:px-[4em] sm:px-[3em] px-[2em] w-full flex-col"
    >
      <div className="flex flex-col mx-auto lg:w-11/12">
        <motion.h1
          whileInView={{
            opacity: [0, 1],
          }}
          className={`
          text-2xl text-center font-bold 
          ${lang === "ar" ? "sm:text-right" : "sm:text-left"}`}
        >
          {t("why-us.title")}
        </motion.h1>
        <motion.p
          whileInView={{
            opacity: [0, 1],
          }}
          className={`text-gray-600 mt-3 text-center md:w-8/12 text-lg
        ${lang === "ar" ? "sm:text-right" : "sm:text-left"}
        `}
        >
          {t("why-us.description")}
        </motion.p>
      </div>

      <div className="grid mx-auto mt-[20px] md:grid-cols-2 sm:grid-cols-1 gap-4  lg:w-11/12 my-3">
        {whyUsCards.map((card, index) => (
          <motion.div
            key={index}
            whileInView={{
              opacity: [0, 1],
              x: [-40, 0],
            }}
          >
            <WhyUsCard
              title={card.title}
              description={card.description}
              number={card.number}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
