const express = require("express");
const router = express.Router();
const productSchema = require("../model/product");
router.post("/addProduct", function (req, res) {
  console.log(req.body);
  const productData = new productSchema(req.body);
  productData.save(function (err) {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("successfully");
      res.send("Product added successfully");
    }
  });
});

router.get("/getProduct", function (req, res) {
  studentSchema.find({}, function (err, data) {
    if (err) {
      console.log("Log of error", err);
    } else {
      res.send({ results: data });
    }
  });
});
module.exports = router;
