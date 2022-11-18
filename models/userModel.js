const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: true,
    minLength: [5, "Minimum length 5"],
  },
});

module.exports = mongoose.model("user", userSchema);
