
const {createCourse, getCourse, getAllCourses, deleteCourse} = require("../controllers/courseController")

const courseRoutes = require("express").Router();




courseRoutes.post("/createCourse" ,createCourse)
courseRoutes.get("/getCoursee" ,getCourse)
courseRoutes.get("/getAllCourses" ,getAllCourses)
courseRoutes.delete("/deleteCourse" ,deleteCourse)
module.exports = courseRoutes;