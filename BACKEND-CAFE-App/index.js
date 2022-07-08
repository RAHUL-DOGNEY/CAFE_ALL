const express = require('express');
let cors = require('cors');
const connection = require('./connection')
const userRouter = require('./routes/user')


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRouter);

module.exports = app;