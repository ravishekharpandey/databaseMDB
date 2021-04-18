const express = require("express");
const router = express.Router();
const quotesSchema = require("../model/quotes");
router.post("/addQuote", function (req, res) {
  console.log(req.body);
  const quotesData = new quotesSchema(req.body);
  quotesData.save(function (err) {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("successfully");
      res.send("Quotes added successfully");
    }
  });
});

router.get("/getQuote", function (req, res) {
  studentSchema.find({}, function (err, data) {
    if (err) {
      console.log("Log of error", err);
    } else {
      res.send({ results: data });
    }
  });
});
module.exports = router;
