import React from "react";
import Image from "next/image";
import logo from "../../public/imgs/logo.png";
import Link from "next/link";
import mainIcon from "/public/imgs/mail-icon.svg";
import setLanguage from "next-translate/setLanguage";

export default function Footer() {
  return (
    <div
      className="w-full py-[3em] px-[3em] bg-[#282828] text-white
      grid grid-cols-[20em_max-content_max-content_1fr_100px] grid-rows-2 gap-3
    "
    >
      <div className="desc row-span-2 flex flex-col">
        <div className="w-[6em] mb-1">
          <Image src={logo} layout="responsive" />
        </div>
        <div className="text-xl font-bold">Melo Production</div>
        <div className="text-lg">
          We are a cross-functional team, skilled in fields involving the
          production and marketing of visual digital and non-digital content.
        </div>
      </div>

      <div className="information">
        <div className="text-xl font-bold">information</div>
        <ul className="underline">
          <Link href="/About-Us">
            <li className="cursor-pointer">About Us</li>
          </Link>
          <Link href="/Our-Services">
            <li className="cursor-pointer">Our Services</li>
          </Link>
          <Link href="/Our-Clintes">
            <li className="cursor-pointer">Our Clintes</li>
          </Link>
          <Link href="/Our-Projects">
            <li className="cursor-pointer">Our Projects</li>
          </Link>
        </ul>
      </div>

      <div className="contact-us ml-6">
        <div className="text-xl font-bold">Contact Us</div>
        <ul className="underline">
          <Link href="/About-Us">
            <li className="cursor-pointer flex gap-2">
              Kornish St. Kirkuk, Iraq
            </li>
          </Link>
          <Link href="/Our-Services">
            <li className="cursor-pointer flex gap-2">
              info@meloproduction.me
            </li>
          </Link>
          <Link href="/Our-Clintes">
            <li className="cursor-pointer flex gap-2">+964-770-580-3570</li>
          </Link>
        </ul>
      </div>

      <div className="language justify-self-end ml-6">
        <div className="text-xl font-bold">language</div>
        <ul className="underline">
          <li>
            <button
              onClick={async () => await setLanguage("en")}
              className="cursor-pointer"
            >
              English
            </button>
          </li>
          <li>
            <button
              onClick={async () => await setLanguage("ar")}
              className="cursor-pointer"
            >
              Arabic
            </button>
          </li>
        </ul>
      </div>

      <div className="hire-us">
        <button className="text-black bg-white py-2 px-5 rounded-md font-bold">
          Hire Us
        </button>
      </div>

      <div className="fotter-bottom col-span-4">
        <div className="text-xl font-bold text-center">Follow Us</div>
        </div>
    </div>
  );
}
