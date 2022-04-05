import useTranslation from "next-translate/useTranslation";
import { ServicesSection, BlueButton, GoUpButton } from "../src/ComponentFiles";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Services() {
  const { t, lang } = useTranslation("services");
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="title text-2xl font-bold text-center">{t("title")}</div>
      <div className="text-center lg:w-3/6 md:w-4/6 w-5/6 text-lg mt-2">
        {t("description")}
      </div>
      <br />

      <Link href="/contact-us">
        <Button className=" bg-blue-600" variant="contained" color="primary">
          {t("btn")}
        </Button>
      </Link>

      <ServicesSection />

      {/* <GoUpButton /> */}
    </div>
  );
}
