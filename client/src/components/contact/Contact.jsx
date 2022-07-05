import React, { useState } from 'react'
import axios from 'axios'

import './Contact.css'

const Contact = () => {
    const initialValues = { 
        name: '', 
        email: '', 
        message: '', 
        sent: false 
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
        console.log(formValues)
    }
    
    const formSubmit = (e) => { 
        e.preventDefault()
        setFormErrors(validate(formValues))

        let data = {
            name: formValues.name,
            email: formValues.email,
            message: formValues.message,
        }

        axios.post('/api/email', data)
        .then(response => {
             setFormValues({ sent: true });
        }).catch(() => {
            console.log('Message not sent!')
        })
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.name) {
            errors.name = "Name is required!"
        }

        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format"
        }

        if (!values.message) {
            errors.message = "Message is required!"
        }

        return errors
    }

  return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form> 
                    <h1><span>Contact</span> Us</h1>
                    <div>
                        <label>Name</label>
                        <input 
                            required
                            type="text" 
                            placeholder='Enter your name'
                            name='name'
                            id='name'
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{ formErrors.name }</p>
                    <div>
                        <label>Email</label>
                        <input 
                            required
                            type="email" 
                            placeholder='Enter your email'
                            name='email'
                            id='email'
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{ formErrors.email }</p>
                    <div>
                        <label>Message</label>
                        <textarea 
                            required
                            rows='10' 
                            placeholder='Enter your message'
                            name='message'
                            id='message'
                            value={formValues.message}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{ formErrors.message }</p>
                    {formValues.sent ? <div className="sentMessage">Message sent</div> : null}
                    <button onClick={formSubmit}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact