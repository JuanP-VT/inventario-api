const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Database Models
const Categories = require("./Models/CategoriesModel");
//Routes
const CategoriesRoute = require("./Routes/CategoriesRoute");
const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGOURL);

app.use(express.json());
app.use("/categories", CategoriesRoute);
app.listen(process.env.PORT);
