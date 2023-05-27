const mongoose = require('mongoose');
//Course Schema 
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  start_date: {
    type: Date,
    default: Date.now()
  },
  videoLectures: {
    data: Buffer,
    contentType: String
  },
  slides: {
    data: Buffer,
    contentType: String
  },
  handouts: {
    data: Buffer,
    contentType: String
  },
  announcement: {
    type:String,
    required:false
}
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
