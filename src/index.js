const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOURL)
app.listen(process.env.PORT)
