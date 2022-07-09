module.exports = {
    port: process.env.PORT || 5000,
    local_client_app: process.env.LOCAL_CLIENT_APP,
    remote_client_app: process.env.REMOTE_CLIENT_APP,
    allowedDomains: (process.env.NODE_ENV === 'production' ? [
        process.env.REMOTE_CLIENT_APP,
        process.env.REMOTE_SERVER_API
    ] : [
        process.env.LOCAL_CLIENT_APP,
        process.env.LOCAL_SERVER_API
    ]),
    email_services: process.env.MAIL_SERVICE,
    email_host: process.env.MAIL_HOST,
    email_port: process.env.MAIL_PORT,
    email_user: process.env.MAIL_USER,
    email_pass: process.env.MAIL_PASS
}