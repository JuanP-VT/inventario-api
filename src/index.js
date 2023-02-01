const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Database Models
const Categories = require("./Models/CategoriesModel");

const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGOURL);
app.listen(process.env.PORT);
