import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    let { username, email, phone, password } = req.body;

    if (!username && !email && !phone && !password) {
      throw new Error("Please fill the form ...❌");
    }

    let checkEmail = await User.findOne({ email: email });
    if (checkEmail) throw new Error("Email already exist...❌");

    let checkPhone = await User.findOne({ phone: phone });
    if (checkPhone) throw new Error("Phone already exists...❌");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;

        let user = await User.create({
          username: username,
          email: email,
          phone: phone,
          password: hash,
        });

        res.status(200).json({
          success: true,
          error: false,
          message: "User created successfully...✅",
          userId: user._id,
        });
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error?.message,
    });
  }
};

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const checkUser = await User.findOne({ email });
      if (!checkUser) {
        return res.status(404).json({
          success: false,
          error: true,
          message: "User not found...❌",
        });
      }
  
      // Compare password
      bcrypt.compare(password, checkUser.password, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: true,
            message: "Password validation error...🔐",
          });
        }
  
        if (result) {
          // Generate JWT token
          const token = jwt.sign(
            { email: checkUser.email, userId: checkUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '24h' } // Optional: setting token expiration time
          );
  
          return res.status(200).json({
            success: true,
            error: false,
            message: "Logged in successfully...✅",
            userId: checkUser._id,
            token, // Send token back to client
          });
        } else {
          return res.status(401).json({
            success: false,
            error: true,
            message: "Invalid password...🔐",
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: true,
        message: error.message,
      });
    }
  };
  