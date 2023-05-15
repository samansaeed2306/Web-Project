const User = require('../models/userModel');


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Create and sign the JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
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

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login
};
