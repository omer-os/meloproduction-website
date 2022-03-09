import React from "react";
// Demo-Graphic-Set
// ramadan-tabak
// baharat-mendi
// tabak-grilling-bag
// chicken-home-ad
// tabak-tea-ad
// enishtain-cafe
// raji-orange-ad
// enishtain-cafe-kirkuk
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

import WorkBox from "./WorkBox";

export default function OurWorkSection() {
  return (
    <div className="flex flex-col py-5 w-full">
      <h1 className="text-2xl text-center font-bold">Our Work</h1>

      <div className="grid p-5 gap-5 md:grid-cols-4 transition-all grid-cols-2">
        <WorkBox
          title="demo graphic design set"
          img={DemoGraphicSet}
          link="/projects/Demo-Graphic-Set"
        />
        <WorkBox
          title="demo graphic design set"
          img={RamadanTabak}
          link="/projects/ramadan-tabak"
        />
        <WorkBox
          title="demo graphic design set"
          img={BaharatMendi}
          link="/projects/baharat-mendi"
        />
        <WorkBox
          title="demo graphic design set"
          img={TabakGrillingBag}
          link="/projects/tabak-grilling-bag"
        />
        <WorkBox
          title="demo graphic design set"
          img={ChickenHomeAd}
          link="/projects/chicken-home-ad"
        />
        <WorkBox
          title="demo graphic design set"
          img={TabakTeaAd}
          link="/projects/tabak-tea-ad"
        />
        <WorkBox
          title="demo graphic design set"
          img={EnishtainCafe}
          link="/projects/enishtain-cafe"
        />
        <WorkBox
          title="demo graphic design set"
          img={RajiOrangeAd}
          link="/projects/raji-orange-ad"
        />
        <WorkBox
          title="demo graphic design set"
          img={EnishtainCafeKirkuk}
          link="/projects/enishtain-cafe-kirkuk"
        />
      </div>

      <Link href="/projects">
        <button className="text-white my-3 py-2 px-6 font-bold bg-red-800 w-max rounded mx-auto">
          View All
        </button>
      </Link>
    </div>
  );
}
