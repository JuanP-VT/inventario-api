const express = require("express");
const { findOneAndUpdate } = require("../Models/CategoriesModel");
const ProductsRoute = express.Router();
const ProductsModel = require("../Models/ProductsModel");

//Request all products
ProductsRoute.get("/", async (req, res) => {
  try {
    const allProducts = await ProductsModel.find();
    res.send(allProducts);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = ProductsRoute;
