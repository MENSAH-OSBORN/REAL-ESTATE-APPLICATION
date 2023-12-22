const mongoose = require("mongoose");
exports.connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
