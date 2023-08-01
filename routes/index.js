const express = require("express");
const router = express.Router();

// router.use(function (req, res, next) {
//   console.log("/" + req.method);
//   next();
// });

router.get("/", function (req, res) {
  res.render(viewpath + "index", { title: " Home ", msg: "" });
});

router.get("/index", function (req, res) {
  res.render(viewpath + "index", { title: " Home ", msg: "" });
});

router.get("/about", function (req, res) {
  res.render(viewpath + "about", { title: " About " });
});

router.get("/contact", function (req, res) {
  res.render(viewpath + "contact", { title: " Contact " });
});

//  when contact submited
router.post("/index", function (req, res) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "somendra",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO contact (name, email, massage) VALUES ('" + req.body.name + "','" + req.body.email + "','" + req.body.msg + "')";
    // console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.render(viewpath + "index", { title: " Home ", msg: "Masage Send !" });
    });
  });
});

module.exports = router;
