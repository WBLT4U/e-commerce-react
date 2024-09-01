import React from "react"
import "./Header.css"
import Head from "./Head"
import Home from "./components/Home";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
import Search from "./Search"
import Navbar from "./Navbar"
import { Routes, Route } from 'react-router-dom';

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        
      </Routes>
    </>
  )
}

export default Header
