const express = require("express");
const router = express.Router();
const Song = require("../models/song");

router.get("/", async (req, res) => {
  const songs = await Song.find();
  console.log(songs);
  res.render("main.pug", { data: songs });
});

router.post("/create", async (req, res) => {
  const name = req.body.name;
  const actor = req.body.actor;
  // 데이터 베이스에 데이터 추가
  const song = new Song({ name, actor });
  try {
    await song.save();
    res.redirect("/");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/song/:name", async (req, res) => {
  const name = req.params.name;
  try {
    await Song.deleteOne({ name });
    res.redirect("/");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
