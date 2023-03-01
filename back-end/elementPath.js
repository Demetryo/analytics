const mongoose = require("mongoose");
let PathSchema = new mongoose.Schema({
  cssPath: {
    type: String,
    required: true,
  },
  innerText: String,
});
module.exports = mongoose.model("Path", PathSchema);
