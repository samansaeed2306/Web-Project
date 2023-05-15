
const {createCourse, getCourse, getAllCourses, deleteCourse, enrollStudent, updateCourse} = require("../controllers/courseController")

const courseRoutes = require("express").Router();




courseRoutes.post("/createCourse" ,createCourse)
courseRoutes.post("/enrollStudent" ,enrollStudent)
courseRoutes.put("/updateCourse/:id" ,updateCourse)
// courseRoutes.get("/getCoursee" ,getCourse)
courseRoutes.get("/getAllCourses" ,getAllCourses)
courseRoutes.delete("/deleteCourse/:id" ,deleteCourse)
module.exports = courseRoutes;