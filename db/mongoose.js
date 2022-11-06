require("dotenv").config();
const mongoose = require("mongoose");

// CONNECT TO MONGODB SERVER
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to mongodb"))
  .catch(e => console.error(e));
