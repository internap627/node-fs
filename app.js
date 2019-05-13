const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

//Routes
const postRoutes = require('./routes/posts.js')

app.use('/posts', postRoutes)



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },  () => {
    console.log('connected to DB')
})

//Start Server
app.listen(5000)