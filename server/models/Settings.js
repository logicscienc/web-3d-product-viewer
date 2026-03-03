const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    modelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Model",
      required: true
    },
    backgroundColor: {
      type: String,
      default: "#ffffff"
    },
    wireframe: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Setting", settingSchema);