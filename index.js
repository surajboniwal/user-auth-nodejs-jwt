require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routers = require('./routers/routers')
const errorHandler = require('./helpers/error.helper')

app.use(express.json())

app.get('/api', (req, res, next) => {
    res.json('Hello, Welcome to Elib! 🚀')
})

app.use('/api/auth', routers.auth)
app.use('/api/profile', routers.profile)

app.use(errorHandler)

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    const port = process.env.PORT || 3000
    app.listen(port, () => console.log(`Server started on port ${port} \nWelcome to Elib! 🚀`))
})