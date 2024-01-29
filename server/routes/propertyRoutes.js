const express = require("express");
const propertyController = require("../controllers/propertyController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .post(authController.restrictsTo("agent"), propertyController.createProperty)
  .get(propertyController.getAllProperty);
router
  .route("/:id")
  .get(propertyController.getProperty)
  .patch(authController.restrictsTo("agent"), propertyController.updateProperty)
  .delete(
    authController.restrictsTo("agent"),
    propertyController.deleteProperty
  );

module.exports = router;
