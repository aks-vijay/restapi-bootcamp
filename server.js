// require modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// load env vars
dotenv.config({ path: "./config/config.env" });

// export router
const bootcamps = require("./routes/bootcamp.js");

// init express
const app = express();

// dev middleware - morgan
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// mount router to express server
app.use("/api/v1/bootcamps", bootcamps);

// listen to port
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}!`)
);
