const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongoConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => console.log("MongoDB conected"))
    .catch((err) => {
      console.log(err);
    });
};

const mongoClient = () => {
  const client = new MongoClient(process.env.MONGO_URL);
  return client;
};

module.exports = { mongoConnection, mongoClient };
