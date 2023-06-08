// const Course = require('../models/courseModel');






// // Create a new course
// const createCourse = async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       instructor,
//       duration,
//       price,
//       start_date
//     } = req.body;

//     const course = new Course({
//       title,
//       description,
//       instructor,
//       duration,
//       price,
//       start_date
//     });

//     const savedCourse = await course.save();
//     res.status(201).json(savedCourse);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all courses
// const getAllCourses = async (req, res) => {
//   try {
//     const courses = await Course.find().populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');
//     res.json({ courses });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a course by ID
// const getCourseById = async (req, res) => {
//   try {
//     const courseId = req.params.id;
//     const course = await Course.findById(courseId).populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');

//     if (!course) {
//       return res.status(404).json({ error: 'Course not found' });
//     }

//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Enroll a student in a course
// const enrollStudent = async (req, res) => {
//   try {
//     const courseId = req.params.id;
//     const studentId = req.body.studentId;

//     const course = await Course.findById(courseId);

//     if (!course) {
//       return res.status(404).json({ error: 'Course not found' });
//     }

//     course.students.push(studentId);
//     await course.save();

//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update a course
// const updateCourse = async (req, res) => {
//   try {
//     const courseId = req.params.id;
//     const updates = req.body;

//     const course = await Course.findByIdAndUpdate(courseId, updates, {
//       new: true,
//       runValidators: true
//     });

//     if (!course) {
//       return res.status(404).json({ error: 'Course not found' });
//     }

//     res.json(course);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a course
// const deleteCourse = async (req, res) => {
//   try {
//     const courseId = req.params.id;

//     const course = await Course.findByIdAndDelete(courseId);

//     if (!course) {
//       return res.status(404).json({ error: 'Course not found' });
//     }

//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   createCourse,
//   getAllCourses,
//   getCourseById,
//   enrollStudent,
//   updateCourse,
//   deleteCourse
// };
// // const Course = require('../models/courseModel');
// // const User = require('../models/userModel');
// // const mongoose = require('mongoose');

// // // Create a new course
// // const createCourse = async (req, res) => {
// //   try {
// //     const {
// //       title,
// //       description,
// //       instructor,
// //       duration,
// //       price
// //       //start_date
// //       // Saman I excluded above start _date because current date should go into it
// //       //idk if that's right or wrong but I am doing it cos Hania did it this way and 
// //       //we gotta be consistent with it
// //     } = req.body;
// //     console.log("I am here after req.body");  
// //     // const instructorObj = await User.findOne({ email: instructor });
// //     // console.log(instructorObj);
// //     // instructor = instructorObj._id;

// //     const course = new Course({
// //       title,
// //       description,
// //       instructor,
// //       duration,
// //       price,
// //       start_date: new Date()
// //     });
// //     console.log("I am here after course creation");

// //     const savedCourse = await course.save();
// //     console.log("I am here after course save");
// //     res.status(200).json(savedCourse);
// //   } catch (error) {
// //     console.log("error in createCourse");
// //     res.status(400).json("Error: IT IS AN ERROR ON BACKEND");
// //   }
// // };

// // // Get all courses
// // const getAllCourses = async (req, res) => {
// //   try {
// //     // const courses = await Course.find().populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');
// //     const courses = await Course.find()
// //     res.json(courses);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Get a course by ID
// // const getCourseById = async (req, res) => {
// //   try {
// //     console.log("I am here in start of getCourseById");
// //     console.log(req.params.courseId);
// //     const idFromParam = req.params.courseId;
// //     const cleanedId = idFromParam.replace(':', ''); 
// //     const objectId = new mongoose.Types.ObjectId(cleanedId); 
// //     const courseId = objectId;
// //     console.log(courseId);
// //     console.log("I am here after req.params.courseId");
// //     // const course = await Course.findById(courseId).populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');
// //     const course = await Course.findById(courseId)

// //     if (!course) {
// //       return res.status(404).json({ error: 'Course not found' });
// //     }

// //     res.json(course);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Enroll a student in a course
// // const enrollStudent = async (req, res) => {
// //   try {
// //     const courseId = req.params.id;
// //     const studentId = req.body.studentId;

// //     const course = await Course.findById(courseId);

// //     if (!course) {
// //       return res.status(404).json({ error: 'Course not found' });
// //     }

// //     course.students.push(studentId);
// //     await course.save();

// //     res.json(course);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Update a course
// // const updateCourse = async (req, res) => {
// //   try {
// //     const idFromParam = req.params.courseId;
// //     const cleanedId = idFromParam.replace(':', ''); 
// //     const objectId = new mongoose.Types.ObjectId(cleanedId); 
// //     const courseId = objectId;
// //     const updates = req.body;

// //     const course = await Course.findByIdAndUpdate(courseId, updates, {
// //       new: true,
// //       runValidators: true
// //     });

// //     if (!course) {
// //       return res.status(404).json({ error: 'Course not found' });
// //     }

// //     res.status(200).json(course);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // };

// // // Delete a course
// // const deleteCourse = async (req, res) => {
// //   try {
// //     // const courseId = req.params.id;
// //     const idFromParam = req.params.courseId;
// //     const cleanedId = idFromParam.replace(':', ''); 
// //     const objectId = new mongoose.Types.ObjectId(cleanedId); 
// //     const courseId = objectId;
// //     console.log(courseId);

// //     const course = await Course.findByIdAndDelete(courseId);

// //     if (!course) {
// //       return res.status(404).json({ error: 'Course not found' });
// //     }

// //     res.status(200).json({ message: 'Course deleted successfully' });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // module.exports = {
// //   createCourse,
// //   getAllCourses,
// //   getCourseById,
// //   enrollStudent,
// //   updateCourse,
// //   deleteCourse
// // };


const Course = require('../models/courseModel');
const User = require('../models/userModel');
const mongoose = require('mongoose');

// Create a new course
const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      duration,
      price
      //start_date
      // Saman I excluded above start _date because current date should go into it
      //idk if that's right or wrong but I am doing it cos Hania did it this way and 
      //we gotta be consistent with it
    } = req.body;
    console.log("I am here after req.body");  
    // const instructorObj = await User.findOne({ email: instructor });
    // console.log(instructorObj);
    // instructor = instructorObj._id;

    const course = new Course({
      title,
      description,
      instructor,
      duration,
      price,
      start_date: new Date()
    });
    console.log("I am here after course creation");

    const savedCourse = await course.save();
    console.log("I am here after course save");
    res.status(200).json(savedCourse);
  } catch (error) {
    console.log("error in createCourse");
    res.status(400).json("Error: IT IS AN ERROR ON BACKEND");
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    // const courses = await Course.find().populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');
    const courses = await Course.find()
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a course by ID
const getCourseById = async (req, res) => {
  try {
    console.log("I am here in start of getCourseById");
    console.log(req.params.courseId);
    const idFromParam = req.params.courseId;
    const cleanedId = idFromParam.replace(':', ''); 
    const objectId = new mongoose.Types.ObjectId(cleanedId); 
    const courseId = objectId;
    console.log(courseId);
    console.log("I am here after req.params.courseId");
    // const course = await Course.findById(courseId).populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');
    const course = await Course.findById(courseId)

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Enroll a student in a course
const enrollStudent = async (req, res) => {
  try {
    const courseId = req.params.id;
    const studentId = req.body.studentId;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    course.students.push(studentId);
    await course.save();

    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  try {
    const idFromParam = req.params.courseId;
    const cleanedId = idFromParam.replace(':', ''); 
    const objectId = new mongoose.Types.ObjectId(cleanedId); 
    const courseId = objectId;
    const updates = req.body;

    const course = await Course.findByIdAndUpdate(courseId, updates, {
      new: true,
      runValidators: true
    });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  try {
    // const courseId = req.params.id;
    const idFromParam = req.params.courseId;
    const cleanedId = idFromParam.replace(':', ''); 
    const objectId = new mongoose.Types.ObjectId(cleanedId); 
    const courseId = objectId;
    console.log(courseId);

    const course = await Course.findByIdAndDelete(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  enrollStudent,
  updateCourse,
  deleteCourse
};
