const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.render("index", { title: "Home Page" });
// });

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
