const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("We got a new request");
  res.send("This is a response!");
});

app.listen(4000, () => {
  console.log("Listening on Port:4000");
});
