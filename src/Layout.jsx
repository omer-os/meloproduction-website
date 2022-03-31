import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function Layout({ children }) {
  const router = useRouter();
  const { t, lang } = useTranslation();

  return (
    <>
      <Head>
        <title>{router.pathname === "/" ? "Home" : router.pathname}</title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Melo Production. Public Relations Agency. We inspire brands and people to grow and develop."
              : "نحن نلهم العلامات التجارية والأفراد للنمو والتطور."
          }
        />
      </Head>
      <NavBar />

      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
              x: -100,
              transition: {
                type: "spring",
              },
            },
            animate: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
              },
            },
            exit: {
              opacity: 0,
              y: -100,
              transition: {
                type: "keyframes",
                duration: 0.15,
              },
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}
