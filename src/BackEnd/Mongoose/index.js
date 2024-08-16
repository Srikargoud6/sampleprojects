const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/webseries");
}

const showsSchema = new mongoose.Schema({
  title: String,
  genre: String,
  rating: Number,
  isRunning: Boolean,
});

const show = mongoose.model("show", showsSchema);

const got = new show({
  title: "Game of thrones",
  genre: "Fantasy",
  rating: 9.2,
  isRunning: false,
});

show.insertMany([
  {
    title: "Game of thrones",
    genre: "Fantasy",
    rating: 9.2,
    isRunning: false,
  },
  {
    title: "Stranger things",
    genre: "Sci-Fi",
    rating: 8.7,
    isRunning: true,
  },
  {
    title: "FRIENDS",
    genre: "Sitcom",
    rating: 8.9,
    isRunning: false,
  },
  {
    title: "Hunter x Hunter",
    genre: "Anime",
    rating: 9,
    isRunning: false,
  },
  {
    title: "Money Heist",
    genre: "Crime",
    rating: 8.2,
    isRunning: false,
  },
]);
// .then((data) => {
//   console.log(data);
// });

// show.find({ rating: { $gt: 8.7 } }).then((data) => console.log(data));

// show
//   .updateMany({ title: "Money Heist" }, { title: "Lacasa de Papel" })
//   .then((data) => console.log(data));

// show
//   .findOneAndUpdate(
//     { title: "Game of thrones" },
//     { genre: "Strategy" },
//     { new: true }
//   )
//   .then((data) => console.log(data));

show
  .findOneAndDelete({ title: "Lacasa de Papel" })
  .then((data) => console.log(data));
