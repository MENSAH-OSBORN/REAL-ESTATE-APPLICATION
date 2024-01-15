const mongoose = require("mongoose");

const agentSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "A registered user must be provided"],
  },
  company: {
    type: String,
    required: [true, "Please provide your associated company name"],
  },
  companyAddress: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
  },
  GovernmentID: {
    type: [String],
    required: [true, "Please provide your government IDs"],
    min: [2, "You are to provide at least 2 images of your ID"],
  },
});
agentSchema.index({ companyAddress: "2dsphere" });

module.exports = Agent = mongoose.model("Agent", agentSchema);
