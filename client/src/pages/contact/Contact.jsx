import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <div className="contactUs">
      <div className="title">
        <h2>Get in touch</h2>
      </div>
      <div className="box">
        <div className="contact-div form">
          <h3>Send a message</h3>
          <form>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input type="text" name="" id="" />
                </div>
              </div>

              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputBox">
                  <span>Cellphone Number</span>
                  <input type="text" name="" id="" />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Write your message here..."></textarea>
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
        <div className="contact-div info"></div>
        <div className="contact-div map"></div>
      </div>
    </div>
  )
}

export default Contact