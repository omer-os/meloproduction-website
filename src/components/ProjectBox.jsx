import React from "react";
import Image from "next/image";
import Link from 'next/link'


export function ProjectBox({ img, text, btnText, link }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg overflow-hidden">
        <Image src={img} layout="responsive" />
      </div>

      <div className="text-xl text-center capitalize font-bold">{text}</div>
      <Link href={link}>
        <a>
          <button className="btn px-4 py-2 rounded text-white text-sm font-bold bg-blue-600">
            {btnText}
          </button>
        </a>
      </Link>
    </div>
  );
}
