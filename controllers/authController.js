const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = async (user, statusCode, req, res) => {
  const token = signToken(user._id);
  user.token = token;
  await user.save();
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    user,
  });
};

exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        status: "fail",
        message: "User already registered",
      });
    }
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      type: req.body.type,
      password: req.body.password,
    });

    newUser.password = await bcrypt.hash(req.body.password, 12);
    await newUser.save();
    createSendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;
    // regex to check if email or phone
    const reg = /^\d+$/;
    if (reg.test(userId)) {
      const user = await User.findOne({ phone: userId }).select("+password");
      if (!user || !(await user.correctPassword(password, user.password))) {
        res.send("Username or password is incorrect");
      }
      res.status(200).json({
        status: "success",
        user: user,
      });
    } else {
      const user = await User.findOne({ email: userId }).select("+password");
      if (!user || !(await user.correctPassword(password, user.password))) {
        res.send("Username or password is incorrect");
      }
      createSendToken(user, 200, req, res);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
