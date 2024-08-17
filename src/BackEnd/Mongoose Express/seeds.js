const mongoose = require("mongoose");

const Product = require("./models/product");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
}

const sampleProducts = [
  { name: "Mangoes", price: 150, category: "fruit" },
  { name: "Eggs", price: 120, category: "dairy" },
  { name: "Potatoes", price: 80, category: "vegetable" },
  { name: "Tomatoes", price: 30, category: "vegetable" },
  { name: "Apples", price: 210, category: "fruit" },
];

Product.insertMany(sampleProducts).then((data) => console.log(data));
