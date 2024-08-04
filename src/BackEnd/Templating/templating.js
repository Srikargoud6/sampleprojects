const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num });
});

app.get("/f1", (re1, res) => {
  const teams = ["Mercedes", "Ferrari", "McLaren", "Redbull", "Aston Martin"];
  res.render("f1teams", { teams });
});

app.listen("4000", () => {
  console.log("Listening on port: 4000");
});
