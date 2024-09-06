// MAIN FILE
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/Route");

// CONNECT CONFIG FILE
require("dotenv").config();

// CREATE APP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use('/api/auth', router)

// MONGO CONNECTING
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`DataBase is connecting!`);
  })
  .catch((error) => console.error(`DataBase Error: ${error}`));

// EXPORT CCONSTANT
module.exports = app;
