import React from "react";
import Image from "next/image";

export default function ClinetBox({ title, img }) {
  return (
    <div className="min-w-[9em] flex items-center justify-center h-[10em] bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] rounded">
      <div className="img pointer-events-none">
        <Image src={img} alt={title} layout="intrinsic" />
      </div>
    </div>
  );
}
