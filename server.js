const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const homeRoutes = require("./routes/homeRoutes");
app.use(express.json());
app.set("view engine", "ejs");

//static
app.use(express.static("public"));
app.use(expressLayouts);

//route handling
app.use(homeRoutes);

//Memulai server
app.listen(port, () => {
  console.log(`server is up on port http://localhost:${port}`);
});
