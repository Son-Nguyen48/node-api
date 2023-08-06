const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  name: { type: String, default: "Article name" },
  desc: { type: String, default: "Article description" },
  img: { type: String, default: "Article thumbnail link" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Article", Article);
