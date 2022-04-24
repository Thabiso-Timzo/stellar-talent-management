import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import axios from "axios";

import './Contact.css'

const Contact = () => {
  const [sent, setSent] = useState(false)
  const [text, setText] = useState("")
  const [firstName, setFistName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [cellPhoneNumber, setCellPhoneNumber] = useState("")

  const handleSend = async () => {
    setSent(true)
    try {
      await axios.post("http://localhost:5000/sendMail", {
        text,
        firstName,
        lastName,
        email,
        cellPhoneNumber
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="contactUs">
      
      <div className="title">
        <h2>Get in touch</h2>
      </div>
      <div className="box">
        {!sent ? (
          <div className="contact-div form">
          <h3>Send a message</h3>
          <form onSubmit={handleSend}>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input type="text" name="" id="" value={firstName} onChange={(e) => setFistName(e.target.value)} placeholder="Enter your first name" />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input type="text" name="" id="" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
                </div>
              </div>

              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input type="text" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
                </div>
                <div className="inputBox">
                  <span>Cellphone Number</span>
                  <input type="text" name="" id="" value={cellPhoneNumber} onChange={(e) => setCellPhoneNumber(e.target.value)} placeholder="Enter your cell phone number" />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea name="" id="" cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your message here..."></textarea>
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <button>Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        ) : (
          <h1>Email sent</h1>
        )}
        <div className="contact-div info">
          <h3>Contact information</h3>
          <div className="infoBox">
            <div>
              <span><MdLocationOn /></span>
              <p>Birch Acres extension 3, Kempton Park<br/>South Africa</p>
            </div>
            <div>
              <span><MdEmail /></span>
              <Link className="contact-link" to="/mailto:mr.tt.hlatshwayo@gmail.com">mr.tt.hlatshwayo@gmail.com</Link>
            </div>
            <div>
              <span><MdCall /></span>
              <Link className="contact-link" to="tel:+27614567028">+27614567028</Link>
            </div>
            <ul className="sci">
              <li><Link className="social-media" to="#"><BsFacebook /></Link></li>
              <li><Link className="social-media" to="#"><FaInstagram /></Link></li>
              <li><Link className="social-media" to="# "><FaWhatsapp /></Link></li>
              <li><Link className="social-media" to="#"><FaTwitter /></Link></li>
            </ul>
          </div>
        </div>
        <div className="contact-div map">
          <iframe title="Campus Tour" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110715.36036121527!2d30.920911185745595!3d-29.868454961891125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0xcca75546c4aa6e81!2sDurban!5e0!3m2!1sen!2sza!4v1650815961772!5m2!1sen!2sza" 
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">   
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact