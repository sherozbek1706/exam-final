const mongoose = require("mongoose");
const config = require("../shared/config");

const db = () => {
  mongoose
    .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    .then(() => {
      console.log("SERVER HAS BEEN CONNECTED TO DATABASE SUCCESSFULL");
    })
};

module.exports = db;
