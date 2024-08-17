const { type } = require("@testing-library/user-event/dist/type");
const { name } = require("ejs");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecart");
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: [15, "Product name cannot exceed 15 characters"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be less than Zero"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    enum: ["black", "white", "red"],
  },
});

productSchema.set("toObject", { virtuals: true });
productSchema.set("toJSON", { virtuals: true });

productSchema.methods.greet = function () {
  console.log(`Hey there! I am using ${this.name} mobile.`);
};

productSchema.methods.toogleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save;
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 10000 });
};

productSchema.virtual("phones").get(function () {
  return `${this.name} is price at ${this.price} rupees`;
});

const mobile = mongoose.model("mobile", productSchema);
const Mobile1 = mongoose.model("Mobile1", productSchema);

// Mobile1.insertMany({ name: "iphone13", price: "80000" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// mobile
//   .insertMany({ name: "iphone13", price: "80000" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// mobile.find({}).then((data) => console.log(data));

// mobile
//   .insertMany({ name: "Samsung S21FE", price: 26000 })
//   .then((data) => console.log(data))
//   .then((err) => console.log(err));

// mobile
//   .insertMany({ name: "Google Pixel 9", price: 26000 })
//   .then((data) => console.log(data))
//   .then((err) => console.log(err));

// mobile
//   .findByIdAndDelete("66bf56ffe7875f9229d1ba59")
//   .then((data) => console.log(data));

// mobile
//   .findOneAndUpdate({ name: "Google Pixel 9" }, { price: 79999 })
//   .then((data) => console.log(data));

// mobile
//   .findOneAndUpdate({ name: "Samsung S21FE" }, { onSale: true }, { new: true })
//   .then((data) => console.log(data));

// mobile
//   .insertMany({ name: "iphone16mtyftdrsyrtre", price: -74 })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// findProduct();

// const findProduct = async () => {
//   const foundProduct = await Mobile1.findOne({ name: "iphone13" });
//   foundProduct.greet();
// };

// findProduct();

// const toggleSale = async () => {
//   const foundProduct = await mobile.findOne({ name: "iphone13" });
//   console.log(foundProduct);
//   await foundProduct.toggleOnSale();
//   console.log(foundProduct);
// };

// toggleSale();

// mobile.fireSale().then((data) => console.log(data));

const iphone = mobile
  .findOne({ name: "iphone13" })
  .then((data) => console.log(data.phones));
