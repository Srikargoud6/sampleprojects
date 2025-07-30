const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, min: 0, max: 100 },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    minlength: 10,
    maxlength: 30,
  },
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: { type: Date, default: Date.now },
  bestFriend: mongoose.Schema.Types.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
