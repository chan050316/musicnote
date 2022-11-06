const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const songs = await Songs.findAll();

  const DATA = [];

  for (const song of songs) {
    DATA.push({
      id: song.id,
      song: song.song,
      actor: song.actor,
      fullName: song.fullName,
    });
  }

  console.log(DATA);
  res.render("main.pug", { data: DATA });
});

router.post("/create", (req, res) => {
  const actor = req.body.actor;
  const song = req.body.song;
  // 데이터 베이스에 데이터 추가
  models.Song.create({
    song: actor,
    actor: song,
    fullName: actor + " - " + song,
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  res.redirect("/");
});

router.delete("/delete", (req, res) => {
  models.Song.destroy({
    where: { fullName: req.body.deleteName },
  }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
