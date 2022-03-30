import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const variants = "";
  const router = useRouter();

  return (
    <>
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
              color: "transparent",
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
