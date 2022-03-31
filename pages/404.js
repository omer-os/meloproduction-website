import React from "react";
import svg from "../public/imgs/under_construction_.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function ErrorPage() {
  const { t, lang } = useTranslation("common");
  const router = useRouter();

  return (
    <div className="w-full gap-4 h-full px-4 flex justify-center items-center flex-col py-[4em]">
      <div className="img md:w-[20em] w-[14em]">
        <Image alt="404 image" src={svg} layout="responsive" />
      </div>
      <div className="text-2xl text-center text-[#857fee] font-bold">
        {t("404.title")}
      </div>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          router.back();
        }}
      >
        {t("404.btn")}
      </Button>
    </div>
  );
}
