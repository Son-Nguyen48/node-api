const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const news = new Schema({
  name: { type: String, default: "New name" },
  desc: { type: String, default: "New description" },
  img: { type: String, default: "New thumbnail link" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("New", news);
