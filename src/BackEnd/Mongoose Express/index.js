const express = require("express");
const app = express();

const mongoose = require("mongoose");

const Product = require("./models/product");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
}

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.listen(4000, () => {
  console.log("listening on port: 4000");
});
