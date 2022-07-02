import React, { useState } from 'react'
import axios from 'axios'

import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault()

        let data = {
            name: name,
            email: email,
            message: message,
        }

        axios.post('/api/email', data)
        .then(response => {
            setSent(true)
            resetForm()
        }).catch(() => {
            console.log('Message not sent!')
        })
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')

        setTimeout(() => {
            setSent(false)
        }, 3000)
    }

  return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form onClick={formSubmit}> 
                    <h1><span>Contact</span> Us</h1>
                    <div>
                        <label>Name</label>
                        <input 
                            required
                            type="text" 
                            placeholder='Enter your name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            required
                            type="email" 
                            placeholder='Enter your email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea 
                            required
                            rows='10' 
                            placeholder='Enter your message'
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className={sent ? 'msg msgAppear' : 'msg'}>Message has been sent</div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact