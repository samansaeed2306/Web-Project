const { createUser,getAllUsers,updateUser,deleteUser} = require("../controllers/userController")
const userRoutes = require("express").Router();










userRoutes.post("/createUser" ,createUser)
userRoutes.put("/updateUser/:id" ,updateUser)
userRoutes.delete("/deleteUser/:id" ,deleteUser)
userRoutes.get("/getAllUsers" ,getAllUsers)






module.exports = userRoutes;