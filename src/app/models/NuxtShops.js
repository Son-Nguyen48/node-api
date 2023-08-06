const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbs = new Schema();

module.exports = mongoose.model("Db", dbs);
