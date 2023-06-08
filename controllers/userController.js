const User = require('../models/userModel');


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//login controller
let login = (req , res)=>{
  let {email , password} = req.body;

  User.findOne({email:email}).then((user)=>{
      if(user.password == password){
          let token = jwt.sign({
              email:user.email,
              password:user.password,
              role: user.role} , 
              process.env.SECRET_KEY, {
                  expiresIn: "24h"
              }
              )
          res.status(200).json({"Message":"Login Succsessfull" , user:user, token})
      }else{
          res.status(500).json({"Message":"Login Not successful"})
      }
  }
  ).catch(err=>{
      res.status(500).json({"Message":"Login Failed" , err:err})
  }
  )
}

// Create a new user
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      role
    } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      role
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('courses', 'title');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate('courses', 'title');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    const user = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Function to get user analytics
const getUserAnalytics = async (req, res) => {
  try {
    // Count the number of users by role using your preferred database query
    const studentCount = await User.countDocuments({ role: 'student' });
    const adminCount = await User.countDocuments({ role: 'admin' });
    const instructorCount = await User.countDocuments({ role: 'instructor' });

    // Return the user analytics as JSON
    res.json({ studentCount, adminCount, instructorCount });
  } catch (error) {
    console.error('Error retrieving user analytics:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,getUserAnalytics
};
