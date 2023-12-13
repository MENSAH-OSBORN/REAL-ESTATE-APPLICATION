require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 5050;

app.listen(port, function () {
  console.log("listening on port " + port);
});
