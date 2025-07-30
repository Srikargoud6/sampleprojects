const mongoose = require("mongoose");
const User = require("./Schemas/user");

mongoose.connect("mongodb://localhost/testdb");

const run = async () => {
  try {
    const user = await new User({
      name: "Bob",
      age: 25,
      email: "bob@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      bestFriend: null,
      hobbies: ["reading", "gaming"],
      address: { street: "123 Main St", city: "Anytown" },
    });
    await user.save();
    console.log(user);
  } catch (error) {
    console.error("Error saving user:", error);
  }
};
run();
