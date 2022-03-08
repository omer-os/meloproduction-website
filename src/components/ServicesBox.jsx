import React from "react";
import Image from "next/image";

export function ServicesBox({ socialIcon,title, description }) {
  return (
    <div className="flex hover:drop-shadow-xl rounded transition-all ease-linear cursor-pointer gap-2 text-center bg-white p-7 flex-col">
      <div className="img m-auto max-w-[80px]">
        <Image src={socialIcon} layout="intrinsic" />
      </div>
      <div className="title text-xl font-bold">{title}</div>
      <div className="body">
        {description}
      </div>
    </div>
  );
}
