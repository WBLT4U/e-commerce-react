import React from "react"
import Home from "../components/MainPage/Home"
import Shop from "../components/shops/Shop"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <NewArrivals />
      
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
