const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  category: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true },
  img4: { type: String, required: true },
  long_desc: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  short_desc: { type: String, required: true },
  quantity: { type: Number},
});
module.exports = mongoose.model("Product", Product);
