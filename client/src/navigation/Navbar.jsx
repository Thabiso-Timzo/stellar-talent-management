import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
 
import './Navbar.css'
import logo2 from '../images/logo/logo-2.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="navbar">
      <Link to='/' className='logo'>
        <img src={logo2} alt="" />
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
        <Link to='/services' className="services">
          <li>Services</li> 
        </Link>
        <Link to='/gallery' className="gallery">
          <li>Gallery</li> 
        </Link>
        <Link to='/contact' className="contact">
          <li>Contact</li> 
        </Link>
      </ul>
      <button 
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes className="fa-times"/> : <FaBars className="fa-bars"/>}
      </button>
    </div>
  )
}

export default Navbar