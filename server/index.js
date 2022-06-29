const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const emailRoutes = require('./routes/EmailRoutes');

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/email', cors(), emailRoutes); 

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`)
})