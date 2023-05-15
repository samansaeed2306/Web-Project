const Course = require('../models/courseModel');

async function createCourse(req, res) {
  try {
    const { title, description, instructor, duration, price } = req.body;
    const course = new Course({
      title,
      description,
      instructor,
      duration,
      price,
    });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function getCourse(req, res) {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function getAllCourses(req, res) {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function updateCourse(req, res) {
  try {
    const { id } = req.params;
    const { title, description, instructor, duration, price } = req.body;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    course.title = title || course.title;
    course.description = description || course.description;
    course.instructor = instructor || course.instructor;
    course.duration = duration || course.duration;
    course.price = price || course.price;
    await course.save();
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function deleteCourse(req, res) {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function addStudentToCourse(req, res) {
  try {
    const { id } = req.params;
    const { student } = req.body;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    course.students.push(student);
    await course.save();
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  createCourse,
  getCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  addStudentToCourse,
};
