const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a new request");
//   res.send("This is a response!");
// });

app.get("/", (req, res) => {
  res.send("This is a homie page");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>This is ${subreddit} subreddit</h1>`);
  console.log(req.params);
});

app.get("/about", (req, res) => {
  res.send("This is an about page");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("<h3>Nothing found if nothing searched</h3>");
  }
  res.send(`<h3>Search results for ${q}</h3>`);
});

app.get("*", (req, res) => {
  res.send("Unknown path");
});

app.listen(4000, () => {
  console.log("Listening on Port:4000");
});
