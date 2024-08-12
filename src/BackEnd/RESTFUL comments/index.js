const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

const comments = [
  { userName: "Jack", comment: "lol" },
  { userName: "Jill", comment: "great" },
  { userName: "Jade", comment: "nice pic" },
  { userName: "Judy", comment: "awesome" },
  { userName: "Justin", comment: "congrats" },
  { userName: "Jayson", comment: "bravo" },
];

app.get("/comments", (req, res) => {
  res.render("index", { comments });
});

app.listen("4000", () => console.log("listening on port: 4000"));
