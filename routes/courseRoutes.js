
const {createCourse, getCourse,getCourseById, getAllCourses, deleteCourse, enrollStudent, updateCourse} = require("../controllers/courseController")
const {CheckIfAdmin,DecodeUser,CheckIfAdminorInstructor }=require('../controllers/middlewares')

const courseRoutes = require("express").Router();

console.log("I am in course routes right at beginning") 

//CRUDS
//Only admin is authorized to create course
// courseRoutes.post("/createCourse",DecodeUser,CheckIfAdmin,createCourse)


courseRoutes.post("/createCourse",DecodeUser,CheckIfAdmin,createCourse)

//Admin or Instructor can enroll Students in the course created by admin
courseRoutes.post("/enrollStudent/:id" ,DecodeUser,CheckIfAdminorInstructor,enrollStudent)
//Admin or Instructor can update course created by admin
// courseRoutes.put("/updateCourse/:courseId" ,DecodeUser,CheckIfAdminorInstructor,updateCourse)
courseRoutes.put("/updateCourse/:courseId",updateCourse)

//Admin or Instructor can reAd all courses created by admin
// courseRoutes.get("/getAllCourses" ,DecodeUser,CheckIfAdminorInstructor,getAllCourses)

courseRoutes.get("/getAllCourses" , getAllCourses)

//Only Admin can remove a course created by admin
// courseRoutes.delete("/deleteCourse/:id" ,DecodeUser,CheckIfAdmin,deleteCourse)
courseRoutes.delete("/deleteCourse/:courseId" ,deleteCourse)

//Only Admin can read a course created by admin
// courseRoutes.delete("/getCourseById/:id" ,DecodeUser,CheckIfAdmin,getCourseById)

courseRoutes.get("/getCourseById/:courseId" ,getCourseById)


module.exports = courseRoutes;