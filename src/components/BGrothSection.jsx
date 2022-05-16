import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { bgImg } from "../../public/ImageImports";
import { Button } from "@mui/material";

export default function BGrothSection() {
  const { t, lang } = useTranslation("home");
  return (
    <div className="w-full min-h-[25em] py-[1em] justify-center relative bg-cover px-[1em] sm:px-[3em] flex flex-col gap-3 text-white items-center text-center">
      <Image alt="Image of working people" src={bgImg} priority layout="fill" />

      <div className="title sm:text-3xl text-2xl lg:max-w-[20em] z-20 font-bold">
        {t("Business-Growth-Section.title")}
      </div>
      <div className="text-lg mx-4 lg:max-w-[30em] z-20">
        {t("Business-Growth-Section.description")}
      </div>

      <Link passHref scroll={false} href="/services">
        <a className="mx-auto z-20 mt-4 w-max">
          <Button className="bg-white text-red-600 hover:bg-gray-100">
            {t("Business-Growth-Section.btn")}
          </Button>
        </a>
      </Link>
    </div>
  );
}
