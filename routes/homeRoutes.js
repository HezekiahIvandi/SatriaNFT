const express = require("express");
const router = express.Router();
const { cardsInfo } = require("../card-info");
const { JelajahiNFTs, ExtraJelajahiNFTs } = require("../Jelajahi-NFTs");
router.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "Home",
    layout: "mainLayout.ejs",
    cardsInfo: cardsInfo,
    JelajahiNFTs: JelajahiNFTs,
    ExtraJelajahiNFTs: ExtraJelajahiNFTs,
  });
});

module.exports = router;
