const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: String,
    price: Number,
  },
  {
    collection: "product",
  }
);

module.exports = mongoose.model("product", productSchema);
