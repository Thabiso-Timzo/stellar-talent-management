import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from "react-icons/fa"

import './NavBar.css'
import logo from '../images/logo/logo1.png'

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false)

  return (
    <nav className="navbar">
        <Link to="/" className="nav-logo">
            <img className="logo-image" src={logo} alt="" />
            <h4 className="nav-logo-name">Star Talent Management</h4>
        </Link>
        <ul 
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}    
        >
            <Link to='/' className="home">
                <li>Home</li>
            </Link>
            <Link to='/about' className="about">
                <li>About</li>
            </Link>
            <Link to='/gallery' className="gallery">
                <li>Gallery</li>
            </Link>
            <Link to='/contact' className="contact">
                <li>Contact us</li>
            </Link>
        </ul>
        <button 
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
        >
            {isMobile ? (
                <FaTimes />
             ) : ( 
                <FaBars />
            )}
        </button>
    </nav>
  )
}

export default NavBar