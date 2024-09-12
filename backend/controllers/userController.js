import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const register = async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;
      if (!(username && email && password && confirmPassword)) {
        return res.status(400).json({ message: "All fields are required", success: false });
      }
      if (password !== confirmPassword) {
        return res.status(401).json({ message: "Both Passwords should be same", success: false });
      }
      const user = await User.findOne({ username });
      if (user) {
        return res.status(402).json({ message: "Username already exists", success: false });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      return res
        .status(201)
        .json({ message: "Account created sucessfully", success: true });
    } catch (error) {
      console.log(error);
    }
  };

  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return res.status(402).json({ message: "Invalid Password" });
      }
      const tokenData = {
        userId: user._id,
      };
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      user.password = undefined;
      return res.status(200).cookie('token', token, {maxAge:1*24*60*60*1000, httpOnly: true, samesite: 'strict'}).json({
          message: 'Login sucessfully',
          user: user,
          success: true
      })
    } catch (error) {
      console.log(error);
    }
  };

  export const logout = (req, res) => {
    try {
      return res.status(200).cookie('token', '', {maxAge: 0}).json({message: 'Logged out sucessfully'})
    } catch (error) {
      console.log(error);
    }
  }