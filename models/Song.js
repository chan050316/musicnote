const mongoose = require("mongoose");

// Define Schemes
const songSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    actor: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("song", songSchema);
