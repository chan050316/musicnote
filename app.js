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

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("main.pug", { data: res.data });
});

app.post("/create", (req, res) => {
  const actor = req.body.actor;
  const song = req.body.song;
  const time = new Date();
  const createAt =
    JSON.stringify(time.getHours()) +
    JSON.stringify(time.getMinutes()) +
    JSON.stringify(time.getSeconds());
  // 데이터 베이스에 데이터 추가
  const data = [actor, song, createAt];
  console.log(data);
  res.redirect("/", data);
});
