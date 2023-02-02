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
//Create new categorie and verify that new categorie does not exist in database
CategoriesRoute.post("/", async (req, res) => {
  try {
    const findDuplicate = await CategoriesModel.where("name").equals(
      req.body.name
    );
    if (findDuplicate.length !== 0) {
      res.send({ msg: "Name is already in database" });
      return;
    }
    const newCategorie = new CategoriesModel({
      name: req.body.name,
      iconUrl: req.body.iconUrl,
    });
    await newCategorie.save();
    res.send({ msg: "Success" });
  } catch (e) {
    res.send({ msg: e.message });
  }
});
module.exports = CategoriesRoute;
