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
    let { text } = req.body
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
        to: "test@test.com",
        subject: "Test email"
    })
})

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`)
})