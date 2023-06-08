const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect("mongodb+srv://saman:88888888@onlineeducationplatform.jjhy2ci.mongodb.net/OurCoursera")

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB