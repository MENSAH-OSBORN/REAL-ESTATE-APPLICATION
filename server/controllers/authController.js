const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const sendToken = (user, statusCode, req, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const cookieOptions = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
  }

  //remove password from response
  user.password = undefined;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    token,
    user,
  });
};
exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    throw new AppError("Please provide all fields", 400);
  }

  const user = await User.create({ name, email, password, role });

  sendToken(user, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new AppError("Please provide all fields", 400);
  }

  const user = await User.findOne({ email }).select("+password");
  const correctPassword = await user?.correctPassword(password, user.password);
  if (!user || !correctPassword) {
    throw new AppError("Invalid email or password", 401);
  }

  sendToken(user, 200, req, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  if (!email) throw new AppError("No email provided", 400);
  const user = await User.findOne({ email });
  if (!user) throw new AppError("There is no user with that email", 404);

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false }); //disable validators before saving document

  //dispatch email to user
  return res.status(200).json({ resetToken });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const { password } = req.body;
  if (!password) throw new AppError("No email provided", 400);

  //hashing reset token from client
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  //validating reset token and expiry
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new AppError("Token is invalid or expired", 400);

  user.password = password;
  user.passwordChangeAt = Date.now();

  //deleting reset token and expiry from database
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  sendToken(user, 201, req, res);
});

//guard routes
exports.protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt || req.headers.authorization.split(" ")[1];

  if (!token) throw new AppError("You are not logged in!", 401);

  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

  const user = User.findById(decodedToken.id);
  if (!user) throw new AppError("The user with this token does not exist", 401);

  //verifying if password was not changed after sending token
  if (decodedToken.iat < user.passwordChangeAt)
    throw new AppError(
      "User recently changed password. Please log in again",
      401
    );

  req.user = user;
  next();
});

//restrict routes depending on roles
exports.restrictsTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError("You are not authorized to perform this action", 401)
      );
    next();
  };
};
