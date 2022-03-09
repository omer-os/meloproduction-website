import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ClinetBox from "./ClinetBox";
import clinet1 from "../../public/imgs/clinets/clinet-logo-1.png";
import clinet2 from "../../public/imgs/clinets/clinet-logo-2.png";
import clinet3 from "../../public/imgs/clinets/clinet-logo-3.png";
import clinet4 from "../../public/imgs/clinets/clinet-logo-4.png";
import clinet5 from "../../public/imgs/clinets/clinet-logo-5.png";
import clinet6 from "../../public/imgs/clinets/clinet-logo-6.png";
import clinet7 from "../../public/imgs/clinets/clinet-logo-7.png";
import clinet8 from "../../public/imgs/clinets/clinet-logo-8.png";
import clinet9 from "../../public/imgs/clinets/clinet-logo-9.png";
import clinet10 from "../../public/imgs/clinets/clinet-logo-10.png";
import useTranslation from "next-translate/useTranslation";

export default function OurClintes() {
  const [Width, setWidth] = useState(0);
  const coursel = useRef();
  const { t, lang } = useTranslation("home");
  useEffect(() => {
    setWidth(coursel.current.scrollWidth - coursel.current.offsetWidth);
  }, []);

  return (
    <div className="my-[2em] flex flex-col">
      <h1 className="text-2xl mx-auto font-bold my-3">
        {t("our-clinets.title")}
      </h1>

      <div className="w-4/6 rounded-xl p-4 mx-auto flex overflow-x-hidden justify-center">
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          ref={coursel}
          drag="x"
          dragConstraints={{
            right: 0,
            left: -Width,
          }}
          className="flex cursor-grab w-full gap-4 px-2 py-2"
        >
          <ClinetBox alt="raji logo" img={clinet1} />
          <ClinetBox alt="valvoline logo" img={clinet2} />
          <ClinetBox alt="baba konafa logo" img={clinet3} />
          <ClinetBox alt="suran university logo" img={clinet4} />
          <ClinetBox alt="fuad logo" img={clinet5} />
          <ClinetBox alt="" img={clinet6} />
          <ClinetBox alt="Frez mix logo" img={clinet7} />
          <ClinetBox alt="al tabakh logo" img={clinet8} />
          <ClinetBox alt="abu ud logo" img={clinet9} />
          <ClinetBox alt="enishtien logo" img={clinet10} />
        </motion.div>
      </div>
    </div>
  );
}
