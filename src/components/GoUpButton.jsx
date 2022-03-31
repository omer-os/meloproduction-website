import React, { useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useViewportScroll } from "framer-motion";

export default function GoUpButton() {
  const { scrollY } = useViewportScroll();
  const [ScrollY, setScrollY] = useState(0);

  const UpWeGo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  scrollY.onChange((value) => {
    setScrollY(value);
  });

  return (
    <Fab
      className={`${
        ScrollY < 100 ? "scale-[.01] opacity-0" : "scale-[1] opacity-1"
      } transition-all duration-500 ease-in-out bg-blue-600  fixed z-50 right-5 bottom-5 active:bg-blue-700 hover:bg-blue-700`}
      onClick={UpWeGo}
    >
      <KeyboardArrowUpRoundedIcon className="text-white" />
    </Fab>
  );
}
