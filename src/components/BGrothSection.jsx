import React from "react";
import bgImg from "../../public/imgs/bg-pcs-img.jpg";
import Link from "next/link";
import Image from "next/image";

export default function BGrothSection() {
  return (
    <div className="w-full min-h-[20em] py-[1em] justify-center relative bg-cover px-[1em] sm:px-[3em] flex flex-col gap-3 text-white items-center text-center">
      <div className="img">
        <Image src={bgImg} layout="fill" />
      </div>
      
      <div className="title sm:text-3xl text-2xl lg:max-w-[20em] z-20 font-bold">
        Business Growth Depends on Marketing and Technology
      </div>
      <div className="text-lg mx-4 lg:max-w-[30em] z-20">
        Marketing does not end when you make sales. Sales end when you stop
        marketing.
      </div>
      <Link href="/services">
        <button className="bg-white font-bold z-20 py-2 px-3 text-[#A72D2D] text-bold text-xl">
          start marketing
        </button>
      </Link>
    </div>
  );
}
