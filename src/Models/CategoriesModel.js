const mongoose = require("mongoose");
const categorieSchema = new mongoose.Schema({
  name: String,
  iconUrl: String,
});

module.exports = mongoose.model("Categories", categorieSchema);
