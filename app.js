const express = require("express");
const app = express();

const PORTNUM = "3000";

app.listen(PORTNUM, () => {
  console.log("start!, I'm listen on port" + PORTNUM);
});

app.get("/", (req, res) => {
  res.render(__dirname + "/public/html/main.pug");
});

app.set("view engine", "pug");
