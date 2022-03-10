import React from 'react'
import Footer from './MainComponents/Footer'
import NavBar from './MainComponents/NavBar'

export default function Layout({ children }) {
  return (
    <>
    <NavBar />
    {children}
    <Footer />
    </>
  )
}
