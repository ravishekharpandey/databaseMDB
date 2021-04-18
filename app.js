const express = require('express');
require("dotenv").config();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter = require("./routes/students");
const quotesRouter = require("./routes/quotes");
const productRouter = require("./routes/product");
const app = express();
//not able to connect mongodb bcoz mongo shell is not working
mongoose.connect(
  'mongo "mongodb+srv://cluster0.2hlbf.mongodb.net/databaseDB" --username ravisp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  function (err) {
    if (err) {
      console.log("Some error in mongodb connection occured", err);
    } else {
      console.log("Connected to database successfully");
    }
  }
);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/students", studentsRouter);
app.use("/quotes", quotesRouter);
app.use("/product", productRouter);
module.exports = app;
