const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true
    },
    fileUrl: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Model", modelSchema);