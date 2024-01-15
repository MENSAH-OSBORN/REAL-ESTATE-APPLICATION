const mongoose = require("mongoose");
const AppError = require("../utils/AppError");

const propertySchema = mongoose.schema({
  name: {
    type: String,
    required: [true, "A property name must be provided"],
    trim: true,
    unique: true,
  },
  agent: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "An agent of the property must be provided"],
  },
  price: {
    type: Number,
    required: [true, "A property price must be provided"],
    min: [0, "Minimum price of a property should be 0"],
  },
  beds: {
    type: Number,
    required: [true, "Number of beds must be provided"],
    min: [0, "Minimum number of beds should be 0"],
  },
  baths: {
    type: Number,
    required: [true, "Number of bathrooms must be provided"],
    min: [0, "Minimum number of bathrooms should be 0"],
  },
  size: {
    type: String,
    required: [true, "A property size must be provided"],
  },
  furnished: {
    type: Boolean,
    default: false,
  },
  listingDate: {
    type: Date,
    default: Date.now(),
  },
  yearBuilt: {
    type: Number,
    required: [true, "Indicate the year the property was built"],
    min: [1990, "Property must be built after 1800"],
    max: [new Date().getFullYear(), "Year built cannot be in the future"],
  },
  lastUpdated: {
    type: Date,
    required: [true, "Provide the last updated date"],
    max: [new Date(), "Date updated cannot be in the future"],
  },
  otherFeatures: [String],
  description: { type: String },
  images: [String],
  startLocation: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
    description: String,
  },
  locations: [
    {
      type: { type: String, default: "Point", enum: ["Point"] },
      coordinates: [Number],
      address: String,
      description: String,
    },
  ],
});

propertySchema.index({ price: 1 });
propertySchema.index({ startLocation: "2dsphere" });

//middlewares

propertySchema.pre(/^find/, function (next) {
  this.populate({
    path: "agent",
    select: "-__v -passwordChangedAt ",
  });

  next();
});

module.exports = Property = mongoose.model("Property", propertySchema);
