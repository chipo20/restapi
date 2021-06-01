const express = require("express")
const connectDB = require ("./config/connectDB")

const app =express()

app.use(express.json())
connectDB()

app.use('/api/contact', require('./config/routes/contact'))
const port = process.env.PORT || 4000

app.listen(port,(err)=>{
    err ? console.log('the server dosent work ') : console.log(`server is connected ${port}`)
})