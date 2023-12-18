const AppError = require("../utils/AppError");
exports.globalError = (error, req, res, next) => {
  error.message = error.message || "Something went wrong";
  error.statusCode = error.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    handleDevelopmentError(error, req, res);
  } else if (process.env.NODE_ENV === "production") {
    handleProductionError(error, req, res);
  }
};

const handleDevelopmentError = (error, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    return res.status(error.statusCode).json({
      message: error.message,
      stack: error.stack,
      error,
    });
  }
};

const handleProductionError = (error, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

//handling invalid database field input
const handleCastError = (error) => {
  const message = `${error.value} is not a valid ${error.path}`;
  throw new AppError(message, 401);
};
