const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const models = require("./models");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch(err => {
    console.error(err);
  });

const PORTNUM = "3000";

app.listen(PORTNUM, () => {
  console.log("start!, I'm listen on port" + PORTNUM);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

let DATA = [];

app.get("/", (req, res) => {
  res.render("main.pug", { data: DATA });
  console.log(DATA);
  console.log(typeof DATA);
  console.log(DATA.length);
});

app.post("/create", (req, res) => {
  const actor = req.body.actor;
  const song = req.body.song;
  const time = new Date();
  const createAt =
    JSON.stringify(time.getFullYear()) +
    JSON.stringify(time.getMonth()) +
    JSON.stringify(time.getDate()) +
    JSON.stringify(time.getHours()) +
    JSON.stringify(time.getMinutes()) +
    JSON.stringify(time.getSeconds());

  // 데이터 베이스에 데이터 추가
  models.Song.create({
    song: actor,
    actor: song,
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  DATA += { actor: actor, song: song, createAt: createAt };
  res.redirect("/");
});
