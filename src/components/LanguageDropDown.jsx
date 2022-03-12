import React from "react";
export function LanguageDropDown({ setDropDown, DropDown, t, setLanguage }) {
  return (
    <div className="drop-down group border px-3 py-1  rounded relative">
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
              onClick={() => {
                setLanguage("ar");
                setDropDown(!DropDown);
              }}
            >
              {t("footer.language.arabic")}
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={() => {
                setLanguage("en");
                setDropDown(!DropDown);
              }}
            >
              {t("footer.language.english")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
