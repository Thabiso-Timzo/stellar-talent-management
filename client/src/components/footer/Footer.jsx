import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillArrowUpCircleFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'
import { Link } from 'react-scroll'

import './Footer.css'
import logo1 from '../../assets/logo/logo1.png'

const Footer = () => {
    const navigate = useNavigate()
    const home = () => navigate('/')
    const about = () => navigate('/about')
    const contact = () => navigate('/contact')

  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <div className="logo-footer">
                    <img src={logo1} alt="" className='icon' />
                    <h2>Star Talent Management</h2>
                </div>
                <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <BsFillArrowUpCircleFill className='icon' />
                </Link>

            </div>
            <div className="col-container">
                <div className="col">
                    <h3>Navigation</h3>
                    <p onClick={home} style={{cursor: 'pointer'}}>Home</p>
                    <p onClick={about} style={{cursor: 'pointer'}}>About</p>
                    <p onClick={contact} style={{cursor: 'pointer'}}>Contact</p>
                </div>
                
                <div className="col">
                    <h3>Information</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>

                <div className="col">
                    <h3>NPC registration</h3>
                    <p>NPC registration number: 2022/366051/08</p>
                </div>

                <div className="col">
                    <h3>Contact details</h3>
                    <p><BsFillTelephoneFill /> 0610881693</p>
                    <p><FaWhatsapp /> 0844682255</p>
                    <p><MdAlternateEmail /> info@startalentmanagement.org.za</p>
                </div>
                    
                <form>
                    <h3>Social media links</h3>
                    <div className="social-group">
                        <a href="https://www.instagram.com/official_startalentmanagement" ><FaInstagram className='social-icon' /></a>
                        <a href="https://wa.me/0844682255" ><FaWhatsapp className='social-icon' /></a>
                        <a href="https://www.facebook.com/Star-Talent-Management-projects-109184701782234" ><FiFacebook className='social-icon' /></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer