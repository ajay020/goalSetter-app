const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;
const app  = express();

connectDB();

//middleware functions
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/goals", require('./routes/goalRoutes'));
app.use(errorHandler);

app.listen(port, () =>  console.log(`Server started on port ${port}`));
