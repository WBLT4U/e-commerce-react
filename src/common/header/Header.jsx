import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"


const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      
    </>
  )
}

export default Header
