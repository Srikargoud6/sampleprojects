const mongoose = require("mongoose");
const User = require("./Schemas/user");

mongoose.connect("mongodb://localhost/testdb");

const run = async () => {
  try {
    // const user = await new User({
    //   name: "Bob",
    //   age: 25,
    //   email: "bob@gmail.com",
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //   bestFriend: null,
    //   hobbies: ["reading", "gaming"],
    //   address: { street: "123 Main St", city: "Anytown" },
    // });
    // await user.save();
    // const user = await User.findById("688b0e2db6628bf21e51e3f6");
    // const user = await User.findOne({ name: "Bob" });
    // const user = await User.findOne({ email: "bob@gmail.com" });
    // const user = await User.where("age").gte(18);
    // console.log(user);
    // user.sayHello();
    // const user = await User.findByEmail("bob@gmail.com");
    const user = await User.find().byAge(18);
    console.log(user);
  } catch (error) {
    console.error("Error saving user:", error);
  }
};
run();
