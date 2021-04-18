const express = require("express");
const router = express.Router();
const studentSchema = require("../model/students");
router.post("/addData", function (req, res) {
  console.log(req.body);
  const studentData = new studentSchema(req.body);
  studentData.save(function (err) {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("successfully");
      res.send("student entry added successfully");
    }
  });
});

router.get("/getData", function (req, res) {
  studentSchema.find({}, { name: 'req.body.name' }, function (err, data) {
    if (err) {
      console.log("Log of error", err);
    } else {
      res.send({ results: data });
    }
  });
});
module.exports = router;
