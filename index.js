const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/database')
const app = express()


const upload=require("express-fileupload")

const session=require("express-session")
const passport=require("passport")
app.use(session({secret:process.env.sessionId}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, './frontend/build')))

require('./auth')
app.use(upload())
connectDB()

const port = process.env.PORT || 5000
let cors = require("cors");
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))



 app.use('/course',require('./routes/courseRoutes'))
 app.use('/user',require('./routes/userRoutes'))


 function isLoggedin(req,res,next){
    req.user ? next() : res.sendStatus(401)
 }
//  app.get('/',(req,res)=>{
//     res.send('<a href="/auth/google">Google Authentication</a>')
//  })
app.use('*', function(req,res){
   res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})
 app.get('/auth/google',
 passport.authenticate('google',{scope:['email','profile']}))
 app.get('/google/callback',
 passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failure',

 })
 )

 app.get('/protected',isLoggedin,(req,res)=>{
    res.send("Hey There!")
 })

 app.get('/auth/failure',(req,res)=>{
    res.send("Something went wrong")
 })

 
app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})