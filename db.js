const mongoose = require("mongoose");
const { db } = require("./models/pizzaModel");

var mongoURL = "mongodb://localhost:27017/Foodlicious";

const uri = "mongodb://localhost:27017/Foodlicious";
mongoose.connect(uri, (err) => {
  if (err) throw err;
  console.log("connected...");
});

module.exports = db;
