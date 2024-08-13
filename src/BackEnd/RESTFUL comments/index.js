const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

const comments = [
  { id: crypto.randomUUID(), userName: "Jack", comment: "lol" },
  { id: crypto.randomUUID(), userName: "Jill", comment: "great" },
  { id: crypto.randomUUID(), userName: "Jade", comment: "nice pic" },
  { id: crypto.randomUUID(), userName: "Judy", comment: "awesome" },
  { id: crypto.randomUUID(), userName: "Justin", comment: "congrats" },
  { id: crypto.randomUUID(), userName: "Jayson", comment: "bravo" },
];

app.get("/comments", (req, res) => {
  res.render("index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("show", { ...comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newComment;
  res.redirect("/comments");
});

app.post("/comments", (req, res) => {
  const { userName, comment } = req.body;
  comments.push({ userName, comment, id: crypto.randomUUID() });
  res.redirect("/comments");
});

app.listen("4000", () => console.log("listening on port: 4000"));
