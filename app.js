const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { redirect } = require("express/lib/response");

const PORTNUM = "3000";

app.listen(PORTNUM, () => {
  console.log("start!, I'm listen on port" + PORTNUM);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render(__dirname + "/public/main.pug");
});

app.post("/create", (req, res) => {
  const actor = req.body.actor;
  const song = req.body.song;
  const time = new Date();
  const createAt = time.getHours() + time.getMinutes + time.getSeconds;
  console.log(createAt);
  // 데이터 베이스에 데이터 추가
  res.redirect("/");
});
