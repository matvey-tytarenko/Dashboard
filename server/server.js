// SERVER FILE
const http = require("http");
const app = require("./index");

// CONNECT CONFIG FILE
require("dotenv").config();

// CREATE SERVER
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// RUN SERVER
server.listen(PORT, () => {
  try {
    console.log(`Server has been started on: http://localhost:${PORT}`);
  } catch (error) {
    console.error(`Server Error: ${error}`);
  }
});
