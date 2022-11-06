const express = require("express");
const router = express.Router();
const Song = require("../models/song");

router.get("/", async (req, res) => {
  const songs = await Song.find();
  res.render("main.pug", { data: songs });
});

router.post("/create", async (req, res) => {
  const actor = req.body.actor;
  const name = req.body.name;
  // 데이터 베이스에 데이터 추가
  const song = new Song({ name, actor });
  try {
    await song.save();
    res.redirect("/");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete", (req, res) => {
  models.Song.destroy({
    where: { fullName: req.body.deleteName },
  }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
