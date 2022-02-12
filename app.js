const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const models = require("./models");
const Songs = models.Song;

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch(err => {
    console.error(err);
  });

const PORTNUM = "3000";
const DATE = ["이번주", "일주전", "이주전", "삼주전"];

app.listen(PORTNUM, () => {
  console.log("start!, I'm listen on port" + PORTNUM);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  const songs = await Songs.findAll();

  const DATA = [];

  for (const song of songs) {
    DATA.push({
      id: song.id,
      song: song.song,
      actor: song.actor,
      createAt: song.createdAt,
    });
  }

  console.log(DATA);
  res.render("main.pug", { data: DATA, date: DATE });
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

  res.redirect("/");
});
