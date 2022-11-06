require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT;
const indexRouter = require("./routes/router");

app.use(express.static("public"));
app.use(express.json());
app.use("/", indexRouter);
app.use(methodOverride("_method"));

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);
