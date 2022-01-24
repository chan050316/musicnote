const express = require("express");
const app = express();

const PORTNUM = "3000";

app.listen(PORTNUM, () => {
  console.log("start!, I'm listen on port" + PORTNUM);
});

app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render(__dirname + "/public/main.pug");
  res.sendFile(__dirname + "/IMG/morning.jpeg");
});
