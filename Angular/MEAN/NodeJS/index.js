const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { mongoose } = require("./db.js");

var MemberController = require("./controllers/MemberController.js");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/Members", MemberController);

app.listen(3000, () => {
  console.log("*** PORT LISTENING ***");
});
