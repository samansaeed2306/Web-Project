
const {createCourse, getCourse, getAllCourses, deleteCourse, enrollStudent, updateCourse} = require("../controllers/courseController")
const {CheckIfAdmin,DecodeUser }=require('../controllers/middlewares')

const courseRoutes = require("express").Router();


//CRUDS

courseRoutes.post("/createCourse",DecodeUser,CheckIfAdmin,createCourse)
courseRoutes.post("/enrollStudent/:id" ,enrollStudent)
courseRoutes.put("/updateCourse/:id" ,updateCourse)
courseRoutes.get("/getAllCourses" ,getAllCourses)
courseRoutes.delete("/deleteCourse/:id" ,deleteCourse)
module.exports = courseRoutes;