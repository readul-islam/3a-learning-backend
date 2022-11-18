require("dotenv").config();
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.unhfjt6.mongodb.net/3aLearning`;
const mongoose = require("mongoose");

const dbConncet = async () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("db connection established");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbConncet;
