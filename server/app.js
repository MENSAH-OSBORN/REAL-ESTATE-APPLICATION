const express = require("express");
const cors = require("cors");
const { globalError } = require("./middlewares/globalError");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//catch all application errors
app.use(globalError);

module.exports = app;
