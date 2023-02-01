const mongoose = require("mongoose");
const categorieSchema = new mongoose.Schema({
  name: String,
  iconUrl: String,
});

module.export = mongoose.model("Categories", categorieSchema);
