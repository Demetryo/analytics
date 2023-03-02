const mongoose = require("mongoose");
let PathSchema = new mongoose.Schema({
  cssPath: {
    type: String,
    required: true,
  },
  text: String,
});
module.exports = mongoose.model("Path", PathSchema);
