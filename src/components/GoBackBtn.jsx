import React from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Fab } from "@mui/material";
import { useRouter } from "next/router";

export default function GoBackBtn() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Fab
      onClick={goBack}
      className={`transition-all group duration-500 top-[6em] left-[10%] absolute ease-in-out z-50 active:bg-blue-700 hover:bg-blue-700`}
    >
      <ArrowBackIosRoundedIcon className=" group-hover:text-white text-black" />
    </Fab>
  );
}
