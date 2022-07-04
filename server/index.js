const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny')); 

app.get('/', () => {
    resizeBy.send('Welcome to my form')
})

app.post('/api/email', (req, res) => {
    const contactEmail = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    contactEmail.verify((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Ready to Send");
        }
    });

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
        from: name,
        to: process.env.MAIL_USER,
        subject: "Contact Form Submission",
        html: `
            <h3>Personal information</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <h3>Message</h3>
            <p>Message: ${message}</p>
        `,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
})

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
})