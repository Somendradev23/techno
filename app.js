var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

global.viewpath = __dirname + "/views/";

app.use(express.static("public"));

app.use("/", require("./routes"));

// app.use("*", function (req, res) {
//   res.sendFile(path + "404.html");
// });

app.listen(3000, function () {
  console.log("Live at Port 3000");
});

