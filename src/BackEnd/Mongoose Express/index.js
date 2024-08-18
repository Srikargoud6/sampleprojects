const express = require("express");
const app = express();
const methodOverride = require("method-override");

const mongoose = require("mongoose");

const Product = require("./models/product");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
}

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category: "All" });
  }
});

app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/details", { product });
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  // Product.insertMany(req.body).then((data) => console.log(data));
  res.redirect(`/products/${newProduct.id}`);
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, req.body);
  res.redirect(`/products/${id}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(4000, () => {
  console.log("listening on port: 4000");
});
