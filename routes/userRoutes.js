const { createUser,getAllUsers,updateUser,deleteUser,login} = require("../controllers/userController")
const {CheckIfAdmin,DecodeUser }=require('../controllers/middlewares')
const userRoutes = require("express").Router();




userRoutes.post("/createUser",createUser)
userRoutes.post("/login" ,login)
userRoutes.put("/updateUser/:id" ,DecodeUser,CheckIfAdmin,updateUser)
userRoutes.delete("/deleteUser/:id" ,DecodeUser,CheckIfAdmin,deleteUser)
userRoutes.get("/getAllUsers" ,DecodeUser,CheckIfAdmin,getAllUsers)






module.exports = userRoutes;