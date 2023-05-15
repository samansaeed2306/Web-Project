const Course = require('../models/courseModel');






// Create a new course
const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      duration,
      price,
      start_date
    } = req.body;

    const course = new Course({
      title,
      description,
      instructor,
      duration,
      price,
      start_date
    });

    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a course by ID
const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId).populate('instructor', 'firstName lastName').populate('students', 'firstName lastName');

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
    const courseId = req.params.id;
    const updates = req.body;

    const course = await Course.findByIdAndUpdate(courseId, updates, {
      new: true,
      runValidators: true
    });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await Course.findByIdAndDelete(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course deleted successfully' });
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
