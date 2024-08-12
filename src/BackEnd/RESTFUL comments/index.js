const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

const comments = [
  { id: 1, userName: "Jack", comment: "lol" },
  { id: 2, userName: "Jill", comment: "great" },
  { id: 3, userName: "Jade", comment: "nice pic" },
  { id: 4, userName: "Judy", comment: "awesome" },
  { id: 5, userName: "Justin", comment: "congrats" },
  { id: 6, userName: "Jayson", comment: "bravo" },
];

app.get("/comments", (req, res) => {
  res.render("index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
  res.render("show", { ...comment });
});

app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.redirect("/comments");
});

app.listen("4000", () => console.log("listening on port: 4000"));
