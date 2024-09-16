const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/UserRoutes");
require("dotenv").config();

// Create App
const app = express();
let connection = true;

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/auth', router)

// DataBase Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`DataBase connection: ${connection}`);
  })
  .catch((err) => {
    connection = false;
    console.log(`DataBase connection: ${connection}\n ${err.message}`);
  });

// Export App
module.exports = app;
