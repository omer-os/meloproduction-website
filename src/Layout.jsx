import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
