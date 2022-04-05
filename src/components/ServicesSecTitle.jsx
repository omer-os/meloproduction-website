import React from "react";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";

export default function ServicesSecTitle() {
  const { t } = useTranslation("home");

  return (
    <>
      <motion.div
        // whileInView={{
        //   opacity: [0, 1],
        //   scale:[.5,1]
        // }}
        className="text-3xl text-center font-bold pt-[40px]"
      >
        {t("services")}
      </motion.div>
      <motion.div
        // whileInView={{
        //   opacity: [0, 1],
        //   scale:[.5,1]
        // }}
      className="text-xl text-gray-600 max-w-[350px] m-auto text-center py-[20px]">
        {t("services-1")}
      </motion.div>
    </>
  );
}
