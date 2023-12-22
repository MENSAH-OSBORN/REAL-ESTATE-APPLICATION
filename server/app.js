const express = require("express");
const cors = require("cors");
require("./utils/db").connect();
const { globalError } = require("./middlewares/globalError");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1", authRoutes);

//catch all application errors
app.use(globalError);

module.exports = app;
