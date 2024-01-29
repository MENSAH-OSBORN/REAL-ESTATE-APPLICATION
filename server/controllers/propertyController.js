const { catchAsync } = require("../utils/catchAsync");
const handlerFactory = require("../utils/handlerFactory");
const Property = require("../models/propertyModel");

exports.createProperty = handlerFactory.createOne(Property);
exports.getProperty = handlerFactory.getOne(Property);
exports.getAllProperty = handlerFactory.getAll(Property);
exports.updateProperty = handlerFactory.updateOne(Property);
exports.deleteProperty = handlerFactory.deleteOne(Property);
