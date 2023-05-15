
const {createCourse, getCourse, getAllCourses, deleteCourse, enrollStudent, updateCourse} = require("../controllers/courseController")

const courseRoutes = require("express").Router();


//CRUDS

courseRoutes.post("/createCourse" ,createCourse)
courseRoutes.post("/enrollStudent/:id" ,enrollStudent)
courseRoutes.put("/updateCourse/:id" ,updateCourse)
courseRoutes.get("/getAllCourses" ,getAllCourses)
courseRoutes.delete("/deleteCourse/:id" ,deleteCourse)
module.exports = courseRoutes;