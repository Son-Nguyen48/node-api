const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newdbs = new Schema();

module.exports = mongoose.model("Newdb", newdbs);
