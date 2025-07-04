const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());

//Cors
const cors = require("cors");
app.use(cors());
//Routes
const CategoriesRoute = require("./Routes/CategoriesRoute");
const ProductsRoute = require("./Routes/ProductsRoute");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGOURL);

app.use("/categories", CategoriesRoute);
app.use("/products", ProductsRoute);
app.listen(3000);
