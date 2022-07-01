import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import './NavBar.css'
import logo1 from '../../assets/logo/logo1.png'

const NavBar = () => {
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const navHandler = () => {
        navigate('/')
    }

  return (
    <div name='top' className='navbar'>
        <div className="container">
            <div className="logo">
                <img onClick={navHandler} src={logo1} alt='' />
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link> </li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
            </div>
        </div>
    </div>
  )
}

export default NavBar