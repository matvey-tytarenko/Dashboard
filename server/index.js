// MAIN FILE
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// CONNECT CONFIG FILE
require('dotenv').config();

// CREATE APP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// Mongo CONNECTING
mongoose.connect(process.env.MONGO_URI);

// EXPORT CCONSTANT
module.exports = app;
