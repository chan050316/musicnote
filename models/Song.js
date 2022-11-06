const mongoose = require("mongoose");

// Define Schemes
const songSchema = new mongoose.Schema(
  {
    songid: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    actor: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("Todo", songSchema);
