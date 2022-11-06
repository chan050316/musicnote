require("dotenv").config();
const express = require("express");
require("./db/mongoose");

const app = express();
const PORT = process.env.PORT;
const indexRouter = require("./routes/router");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", indexRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);
