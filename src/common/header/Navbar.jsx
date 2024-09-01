import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          
          <div className=''>

          {/* catgrories d_flex */}
            {/* <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4> */}
            
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/aboutus'>About</Link>
              </li>
              <li>
                <Link to='/contactus'>Contact</Link>
              </li>
              
              {/* <li>
                <Link to='/pages'>Cutting Boards</Link>
              </li>
              <li>
                <Link to='/user'>Kitchen Mat</Link>
              </li>
              <li>
                <Link to='/vendor'>Pot Strainer</Link>
              </li>
              <li>
                <Link to='/track'>Stage Knife</Link>
              </li>
              <li>
                <Link to='/contact'>Garlic Chopper</Link>
              </li> */}
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
