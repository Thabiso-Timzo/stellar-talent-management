const nodemailer = require('nodemailer')

const sendEmail = async (res, next) => {
    let { text, name, email } = req.body
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
            padding: 20px;
            font-family: sans-sarif;
            font-size: 20px;
            ">

            <h2>STM mailing</h2>
            <p>${name}</p>
            <p>${email}</p>
            <p>${text}</p>
        </div>
        `
    })
}

module.exports = {
    sendEmail
}