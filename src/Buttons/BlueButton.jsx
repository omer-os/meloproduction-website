import React from "react";
import Link from "next/link";

export default function BlueButton({ text, link }) {
  if (link !== "none") {
    return (
      <Link href={link}>
        <a>
          <button className="flex active:scale-95 transition-all duration-100 justify-between items-center text-white bg-blue-600 py-1 md:px-4 px-2 md:text-lg rounded capitalize font-bold">
            {text}
          </button>
        </a>
      </Link>
    );
  } else {
    return (
      <button className="flex w-max active:scale-95 transition-all duration-100 justify-between items-center text-white bg-blue-600 py-1 md:px-4 px-2 md:text-lg rounded capitalize font-bold">
        {text}
      </button>
    );
  }
}
