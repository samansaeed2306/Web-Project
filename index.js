const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/database')
const app = express()
const upload=require("express-fileupload")
app.use(upload())
connectDB()

const port = process.env.PORT || 5000
let cors = require("cors");
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))



 app.use('/course',require('./routes/courseRoutes'))

app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})