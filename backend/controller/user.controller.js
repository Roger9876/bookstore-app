import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Signup controller
export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hashing password with salt length of 10
    const hashPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      }
    });

  } catch (error) {
    console.log('Error on signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const isPasswordMatch = await bcryptjs.compare(password, user.password);

      if (isPasswordMatch) {
        res.status(200).json({
          message: "Login successful",
          user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
          }
        });
      } else {
        return res.status(400).json({ message: "Invalid password" });
      }
    } else {
      return res.status(400).json({ message: "Invalid username" });
    }

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
