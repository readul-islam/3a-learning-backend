const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const appRoute = require("./routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/v1',appRoute)


//Error handling
app.use("*", async (req, res, next) => {
  const error = new Error("Route Not Found");
  error.statusCode = 404;
  next(error);
});

app.use(async (err,req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    error: err.stack,
  });
});

module.exports = app;
