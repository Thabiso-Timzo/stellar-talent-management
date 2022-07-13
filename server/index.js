const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const helmet = require('helmet'); 
const http = require('http');
const compression = require('compression');

const config = require('./config/index');

const { 
    port, 
    allowedDomains, 
    email_services, 
    email_host, 
    email_port,
    email_user,
    email_pass 
} = config;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin: allowedDomains, credentials: true}));
app.use(morgan('tiny')); 
app.use(helmet());
app.use(compression());

app.use(express.static("public_html"));

app.post('/api/email', (req, res) => {
    const contactEmail = nodemailer.createTransport({
        service: email_services,
        host: email_host,
        port: email_port,
        secure: true,
        auth: {
            user: email_user,
            pass: email_pass,
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
        to: email_user,
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

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
})