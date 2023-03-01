const mongoose = require("mongoose");
let PathSchema = new mongoose.Schema({
  path: String,
});
module.exports = mongoose.model("Path", PathSchema);
