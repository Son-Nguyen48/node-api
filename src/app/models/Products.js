const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  brand: { type: String, default: "Brand name" },
  newArrival: { type: String, default: "Is New Arrival" },
  gender: { type: String, default: "Gender" },
  category: { type: String, default: "Category id" },
  sale: { type: String, default: "sale" },
  name: { type: String, default: "name" },
  image: { type: String, default: "image" },
  price: { type: String, default: "price" },
  quantity: { type: String, default: "quantity" }
});

module.exports = mongoose.model("Product", products);
