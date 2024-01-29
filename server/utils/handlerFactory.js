const catchAsync = require("./catchAsync");
const AppError = require("./AppError");
const APIFeatures = require("./apiFeatures");
//create
exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.create(req.body);
    return res
      .status(201)
      .json({ data, message: "Document added successfully" });
  });

//read
exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findById(req.params.id);
    if (!data) return next(new AppError("No document found with that ID", 404));
    return res
      .status(200)
      .json({ data, message: "Documents retrieved successfully" });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    //   .count();

    const data = await features.query;
    if (!data || data.length === 0)
      return next(new AppError("No documents available", 404));

    return res.status(200).json({
      count: data.length,
      data,
      message: "Documents retrieved successfully",
    });
  });

//update
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) return next(new AppError("No document found with that ID", 404));
    return res
      .status(200)
      .json({ data, message: "Document updated successfully" });
  });

//delete
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndDelete(req.params.id);
    if (!data) return next(new AppError("No document found with that ID", 404));
    return res.status(200).json({ message: "Document deleted successfully" });
  });
