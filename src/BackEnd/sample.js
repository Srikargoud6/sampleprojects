const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a new request");
//   res.send("This is a response!");
// });

app.get("/", (req, res) => {
  res.send("This is a home page");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>This is ${subreddit} subreddit</h1>`);
  console.log(req.params);
});

app.get("/about", (req, res) => {
  res.send("This is an about page");
});

app.get("*", (req, res) => {
  res.send("Unknown path");
});

app.listen(4000, () => {
  console.log("Listening on Port:4000");
});
