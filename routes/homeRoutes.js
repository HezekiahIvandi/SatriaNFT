const express = require("express");
const router = express.Router();
const { cardsInfo } = require("../card-info");
router.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "Home",
    layout: "mainLayout.ejs",
    cardsInfo: cardsInfo,
  });
});

module.exports = router;
