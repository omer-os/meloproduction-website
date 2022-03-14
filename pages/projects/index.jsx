import { ProjectBox } from "../../src/components/ProjectBox";
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
import Image from "next/image";

export default function index() {
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
    <div className="flex my-[2em] flex-col items-center w-full">
      <div className="text-2xl font-bold mb-[1.5em]">Our Best Projects</div>

      <div className="grid lg:px-[6em] md:px-[3em] px-[2em] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[2em] w-full">
        
        
        {worksList.map((item) => {

          return <ProjectBox
          key={item.id}
            img={item.img}
            text={item.title}
            btnText="View Project"
            link={item.link}
          />;
        })}


      </div>
    </div>
  );
}
