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
    maxlength: 15,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
});

const mobile = mongoose.model("mobile", productSchema);

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

mobile
  .findOneAndUpdate({ name: "Google Pixel 9" }, { price: 79999 })
  .then((data) => console.log(data));
