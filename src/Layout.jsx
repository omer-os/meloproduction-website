import React from 'react'
import NavBar from './MainComponents/NavBar'

export default function Layout({ children }) {
  return (
    <>
    <NavBar />
    {children}
    </>
  )
}
