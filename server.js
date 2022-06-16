const express = require("express");
const dotenv = require("dotenv");

// load env vars
dotenv.config({ path: "./config/config.env" });

// init express
const app = express();

// listen to port
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}!`)
);