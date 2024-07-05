const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "Home",
    layout: "mainLayout.ejs",
  });
});

module.exports = router;
