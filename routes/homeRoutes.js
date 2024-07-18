const express = require("express");
const router = express.Router();
const { cardsInfo } = require("../card-info");
const { JelajahiNFTs, ExtraJelajahiNFTs } = require("../Jelajahi-NFTs");
const { kreatorInfo } = require("../kreator-info");
router.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "Home",
    layout: "mainLayout.ejs",
    cardsInfo: cardsInfo,
    JelajahiNFTs: JelajahiNFTs,
    ExtraJelajahiNFTs: ExtraJelajahiNFTs,
    kreatorInfo: kreatorInfo,
  });
});
router.get("/login", (req, res) => {
  res.render("login.ejs", {
    title: "Login",
    layout: "mainLayout.ejs",
  });
});

module.exports = router;
