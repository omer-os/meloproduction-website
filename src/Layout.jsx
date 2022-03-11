import React from "react";
import Footer from "./components/Footer";
import Meta from "./components/Meta";
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
