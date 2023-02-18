const express = require("express");
const CategoriesRoute = express.Router();
const CategoriesModel = require("../Models/CategoriesModel");

//Request all categories
CategoriesRoute.get("/", async (req, res) => {
  try {
    const allCategories = await CategoriesModel.find();
    res.send(allCategories);
  } catch (e) {
    res.send(e.message);
  }
});
//Create new category and verify that new category does not exist in database
CategoriesRoute.post("/", async (req, res) => {
  try {
    const findDuplicate = await CategoriesModel.where("name").equals(
      req.body.name
    );
    if (findDuplicate.length !== 0) {
      res.send({ msg: "Name is already in database" });
      return;
    }
    const newCategory = new CategoriesModel({
      name: req.body.name,
      iconUrl: req.body.iconUrl,
    });
    await newCategory.save();
    res.send({ msg: "Success" });
  } catch (e) {
    res.send({ msg: e.message });
  }
});
module.exports = CategoriesRoute;
