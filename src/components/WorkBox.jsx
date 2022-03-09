import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WorkBox({ img, title, link }) {
  return (
    <Link href={link}>
      <div className="flex cursor-pointer rounded-xl relative group overflow-hidden flex-col">
        <div className="img">
          <Image src={img} layout="responsive" />
        </div>

        <div className="img-box group-hover:top-0 top-full transition-all duration-300 absolute bg-red-700/75 w-full h-full flex justify-center items-center">
          <div className="md:text-xl text-lg font-bold text-white text-center capitalize">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}
