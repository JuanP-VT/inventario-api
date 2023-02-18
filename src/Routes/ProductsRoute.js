const express = require("express");
const { findOneAndUpdate } = require("../Models/CategoriesModel");
const ProductsRoute = express.Router();
const ProductsModel = require("../Models/ProductsModel");

//Request all products
ProductsRoute.get("/", async (req, res) => {
  try {
    const allProducts = await ProductsModel.find();
    ProductsModel.updateMany({}, { $rename: { categorie: "category" } });
    res.send(allProducts);
  } catch (e) {
    res.send(e.message);
  }
});
//Create new product and verify that new product does not exist in database
ProductsRoute.post("/", async (req, res) => {
  try {
    const findDuplicate = await ProductsModel.where("name").equals(
      req.body.name
    );
    if (findDuplicate.length !== 0) {
      res.send({ msg: "Name is already in database" });
      return;
    }
    const newProduct = new ProductsModel({
      name: req.body.name,
      category: req.body.category,
      stock: req.body.stock,
      price: req.body.price,
    });
    await newProduct.save();
    res.send({ msg: "Success" });
  } catch (e) {
    res.send(e.message);
  }
});
ProductsRoute.put("/", async (req, res) => {
  try {
    const id = req.body._id;
    await ProductsModel.findByIdAndUpdate(id, {
      name: req.body.name,
      category: req.body.category,
      stock: req.body.stock,
      price: req.body.price,
    });
    res.send({ msg: "Success" });
  } catch (e) {
    res.send(e.message);
  }
});
module.exports = ProductsRoute;
