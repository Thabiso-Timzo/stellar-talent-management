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
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'mr.tt.hlatshwayo@gmail.com',
            pass: 'Thabiso@7028'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'mr.tt.hlatshwayo@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
            <h3>Information</h3>
                <ul>
                    <li>${data.name}</li>
                    <li>${data.email}</li>
                </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error);
        } else {
            res.send('success');
        }
    })

    smtpTransport.close();
})

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
})