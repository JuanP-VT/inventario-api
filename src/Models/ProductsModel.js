const mongoose = require("mongoose");
const CategoriesModel = require("./CategoriesModel");
const productsScheme = new mongoose.Schema({
  name: String,
  categorie: String,
  stock: Number,
  price: Number,
});

module.exports = mongoose.model("Products", productsScheme);
