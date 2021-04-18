const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quotesSchema = new Schema(
  {
    quote: String,
    author: String,
      },
  {
    collection: "quotes",
  }
);

module.exports = mongoose.model("quotes", quotesSchema);
