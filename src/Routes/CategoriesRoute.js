const express = require("express");
const CategoriesRoute = express.Router();
const CategoriesModel = require("../Models/CategoriesModel");

//Request all categories
CategoriesRoute.get("/", async (req, res) => {
  try {
    const allCategories = await CategoriesModel.find();
    res.send({ res: allCategories });
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = CategoriesRoute;
