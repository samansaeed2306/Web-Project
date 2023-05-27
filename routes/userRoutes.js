const { createUser,getAllUsers,updateUser,deleteUser,login,getUserById} = require("../controllers/userController")
const {CheckIfAdmin,DecodeUser }=require('../controllers/middlewares')
const userRoutes = require("express").Router();



//Only admin is authorized to create user
userRoutes.post("/createUser",DecodeUser,CheckIfAdmin,createUser)
userRoutes.post("/login" ,login)
//Only admin is authorized to update user
userRoutes.put("/updateUser/:id",DecodeUser,CheckIfAdmin,updateUser)
//Only admin is authorized to remove user
userRoutes.delete("/deleteUser/:id",DecodeUser,CheckIfAdmin,deleteUser)
//Only admin is authorized to read all users
userRoutes.get("/getAllUsers",DecodeUser,CheckIfAdmin,getAllUsers)
//Only admin is authorized to read a user
userRoutes.get("/getUserById/:id",DecodeUser,CheckIfAdmin,getUserById)





module.exports = userRoutes;