import React from "react";
import Image from "next/image";
import insta from "../../public/imgs/icons/insta.svg";
import facebook from "../../public/imgs/icons/facebook.svg";
import linkdin from "../../public/imgs/icons/linkdin.svg";
import youtube from "../../public/imgs/icons/youtube.svg";

import phoneIcon from "/public/imgs/icons/phone-icon.svg";
import mailIcon from "/public/imgs/icons/mail-icon.svg";
import locationIcon from "/public/imgs/icons/location-icon.svg";

export default function ContactUsSection() {
  return (
    <div className="flex flex-col gap-3 justify-center text-center my-[3em]">
      <div className="text-2xl font-bold">Contact Us for more Details</div>
      <div className="flex justify-center text-xl">
        <div className="img w-[1em]">
          <Image src={locationIcon} layout="responsive" />
        </div>
        Kornish St. Kirkuk, Iraq
      </div>
      <div className="flex justify-center text-xl">
        <div className="img w-[1em]">
          <Image src={mailIcon} layout="responsive" />
        </div>
        info@meloproduction.me
      </div>
      <div className="flex justify-center text-xl">
        <div className="img w-[1em]">
          <Image src={phoneIcon} layout="responsive" />
        </div>
        +964-770-580-3570
      </div>

      <div className="flex justify-center gap-3">
        <a className="w-[1.09em]">
          <Image src={insta} alt="instagram" layout="responsive" />
        </a>
        <a className="w-[1.4em]">
          <Image src={youtube} alt="youtube" layout="responsive" />
        </a>
        <a className="w-[.98em]">
          <Image src={linkdin} alt="linkedin" layout="responsive" />
        </a>
        <a className="w-[.5em]">
          <Image src={facebook} alt="facebook" layout="responsive" />
        </a>
      </div>
    </div>
  );
}
