const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: String,
    college: String,
    location: String,
  },
  {
    collection: "student",
  }
);

module.exports = mongoose.model("student", studentSchema);
