const { createUser,getAllUsers,getUserById,updateUser,deleteUser} = require("../controllers/userController")
const userRoutes = require("express").Router();










userRoutes.post("/createUser" ,createUser)









module.exports = userRoutes;