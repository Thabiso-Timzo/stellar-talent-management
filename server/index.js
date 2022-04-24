const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.post('/sendMail', cors(), async (req, res) => {
    let { 
        text,
        firstName,
        lastName,
        email,
        cellPhoneNumber
    } = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.Mail_FROM,
        to: "36d7be3b5f-c8e92e+1@inbox.mailtrap.io",
        subject: "Test email",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-sarif;
        line-height: 2;
        font-size: 20px;
        ">

        <h2>Here is your email</h2>
        <p>${text}</p>
        <p>${firstName} ${lastName}</p>
        <p>${email}</p>
        <p>${cellPhoneNumber}</p>

        <p>All the best, Thabiso</p>
        </div>
        `
    })
})

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`)
})