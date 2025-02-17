const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const connectMongoDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected...");
    })
    .catch((err) => {
      console.log(`Failed in Database connection : ${err}`);
    });
};

module.exports = connectMongoDb;
