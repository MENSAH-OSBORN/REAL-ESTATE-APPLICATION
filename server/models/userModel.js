const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please tell us your name"] },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please provide your email address"],
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  role: { type: String, default: "user", enum: ["user", "agent"] },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minLength: 8,
    select: false,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

//encrypting password with database middleware
userSchema.pre("save", async function (next) {
  //skip encryption if password isn't modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.correctPassword = async function (password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
};

userSchema.methods.createPasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  this.passwordResetExpires = new Date(Date.now() + 1000 * 60 * 10); //password expires in 10 minutes

  return token;
};

module.exports = User = mongoose.model("User", userSchema);
