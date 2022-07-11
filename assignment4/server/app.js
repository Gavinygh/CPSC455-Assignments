const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const generateData = require('./db/generate-data');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

const app = express();

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2xomc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    //generateData();
    console.log("DB connected.");
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);

module.exports = app;
