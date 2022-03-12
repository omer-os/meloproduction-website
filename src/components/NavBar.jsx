import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import Link from "next/link";
import BlueButton from "../Buttons/BlueButton";

export default function NavBar() {
  const [Open, setOpen] = useState(false);
  const [DropDown, setDropDown] = useState(false);
  const { t, lang } = useTranslation("common");

  return (
    <>
      <div 
      onClick={()=>setDropDown(false)}
      className={`bg-gray-700/10 inset-0 z-50 fixed ${DropDown?"show":"hidden"}`}></div>

      <div className="flex shadow-md bg-white justify-between md:py-3 sticky top-0 left-0 z-50 md:px-9 px-6 py-4 items-center">




        <Link href="/">
          <div className="flex cursor-pointer md:text-xl z-50 flex-1 font-bold">
            {t("logo")}
          </div>
        </Link>

        <div className="hidden md:flex text-gray-600 text-base capitalize justify-between gap-6 bg-red">
          <Link href="/">
            <a
              className="cursor-pointer hover:text-blue-600 transition-all duration-75"
              onClick={() => setOpen(!Open)}
            >
              {t("home")}
            </a>
          </Link>
          <Link href="/about">
            <a
              className="cursor-pointer hover:text-blue-600 transition-all duration-75"
              onClick={() => setOpen(!Open)}
            >
              {t("about")}
            </a>
          </Link>
          <Link href="/services">
            <a
              className="cursor-pointer hover:text-blue-600 transition-all duration-75"
              onClick={() => setOpen(!Open)}
            >
              {t("services")}
            </a>
          </Link>

          <div className="drop-down group relative">
            <button className="dropdown" onClick={() => setDropDown(!DropDown)}>
              {t("footer.language.title")}
            </button>

            <div
              id="dropdownSmall"
              className={`${
                !DropDown ? "hidden" : "show"
              } absolute right-0 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
            >
              <ul className="py-1">
                <li>
                  <a
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={
                    ()=>{setLanguage("ar");setDropDown(!DropDown)}
                  }
                  >
                    {
                      t("footer.language.arabic")
                    }
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={
                    ()=>{setLanguage("en");setDropDown(!DropDown)}
                  }
                  >
                    {
                      t("footer.language.english")
                    }
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-end flex-1">
          <BlueButton text={t("btn")} link="/contact-us" />
        </div>

        <div
          className="flex-col cursor-pointer gap-1 z-50 md:hidden flex"
          onClick={() => {
            setOpen(!Open);
          }}
        >
          <div
            className={`${
              Open ? "rotate-45 top-2" : ""
            } w-8 relative rounded transition-all duration-100 opacity-1 h-1 bg-gray-400`}
          ></div>
          <div
            className={`${
              Open ? "-left-3 opacity-0" : ""
            } w-8 relative rounded transition-all duration-100 opacity-1 h-1 bg-gray-400`}
          ></div>
          <div
            className={`${
              Open ? "-rotate-45 -top-2" : ""
            } w-8 relative rounded transition-all duration-100 opacity-1 h-1 bg-gray-400`}
          ></div>
        </div>

        <div
          className={`
        ${Open ? "left-0" : "-left-[100%]"}
        responsive transition-all duration-150 text-xl font-bold capitalize gap-7 ease-in-out flex flex-col md:hidden  items-center bg-white justify-center z-40 top-0 text-[#535353] left-0 h-screen w-full fixed`}
        >
          <Link href="/">
            <div className="cursor-pointer" onClick={() => setOpen(!Open)}>
              {t("home")}
            </div>
          </Link>
          <Link href="/about">
            <div className="cursor-pointer" onClick={() => setOpen(!Open)}>
              {t("about")}
            </div>
          </Link>
          <Link href="/services">
            <div className="cursor-pointer" onClick={() => setOpen(!Open)}>
              {t("services")}
            </div>
          </Link>
          <Link href="/contact-us">
            <div
              onClick={() => setOpen(!Open)}
              className="text-center cursor-pointer capitalize font-bold flex flex-col gap-8"
            >
              <div className="capitalize w-max bg-blue-600 text-white py-2 px-4 rounded md:font-bold">
                {t("btn")}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
