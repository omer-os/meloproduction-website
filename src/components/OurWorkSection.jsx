import React from "react";
import DemoGraphicSet from "../../public/imgs/projects/Demo-Graphic-Set.jpg";
import RamadanTabak from "../../public/imgs/projects/ramadan-tabak.jpg";
import BaharatMendi from "../../public/imgs/projects/baharat-mendi.jpg";
import TabakGrillingBag from "../../public/imgs/projects/tabak-grilling-bag.jpg";
import ChickenHomeAd from "../../public/imgs/projects/chicken-home-ad.jpg";
import TabakTeaAd from "../../public/imgs/projects/tabak-tea-ad.jpg";
import EnishtainCafe from "../../public/imgs/projects/enishtain-cafe.jpg";
import RajiOrangeAd from "../../public/imgs/projects/raji-orange-ad.jpg";
import EnishtainCafeKirkuk from "../../public/imgs/projects/enishtain-cafe-kirkuk.jpg";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import WorkBox from "./WorkBox";
import RedButton from "../Buttons/RedButton";

export default function OurWorkSection() {
  const { t, lang } = useTranslation("home");

  const worksList = [
    {
      id: 1,
      title: "Demo Graphic Design Set",
      img: DemoGraphicSet,
      link: "/projects/demo-graphic-set",
    },
    {
      id: 2,
      title: "Tabakh Ramadhan Video",
      img: RamadanTabak,
      link: "/projects/ramadan-tabak",
    },
    {
      id: 3,
      title: "Baharat Mendi Video",
      img: BaharatMendi,
      link: "/projects/baharat-mendi",
    },
    {
      id: 4,
      title: "Tabakh Grilling Bag",
      img: TabakGrillingBag,
      link: "/projects/tabak-grilling-bag",
    },
    {
      id: 5,
      title: "Chicken Home Ad",
      img: ChickenHomeAd,
      link: "/projects/chicken-home-ad",
    },
    {
      id: 6,
      title: "Tabakh Tea Ad",
      img: TabakTeaAd,
      link: "/projects/tabak-tea-ad",
    },
    {
      id: 7,
      title: "Enishtain Cafe",
      img: EnishtainCafe,
      link: "/projects/enishtain-cafe",
    },
    {
      id: 8,
      title: "Raji Orange Ad",
      img: RajiOrangeAd,
      link: "/projects/raji-orange-ad",
    },
    {
      id: 9,
      title: "Enishtain Cafe Kirkuk",
      img: EnishtainCafeKirkuk,
      link: "/projects/enishtain-cafe-kirkuk",
    },
  ];

  
  return (
    <div className="flex flex-col py-5 w-full">
      <h1 className="text-2xl text-center font-bold">{t("our-work.title")}</h1>

      <div className="grid p-5 gap-5 md:grid-cols-4 transition-all grid-cols-2">
        {worksList.map((work) => (
          <Link href={work.link} key={work.id}>
            <a className="block">
              <WorkBox title={work.title} img={work.img} link={work.link} />
            </a>
          </Link>
        ))}
      </div>

      <Link href="/projects">
        <a className="w-max mx-auto">
          <RedButton text={t("our-work.btn")} />
        </a>
      </Link>
    </div>
  );
}

