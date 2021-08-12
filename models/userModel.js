const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide your email"],
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "Please provide your phone number"],
    },
    type: {
      type: String,
      enum: ["buyer", "seller"],
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);
