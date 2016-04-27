var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Course = require("./schemas/course");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/school-test");

app.get("/courses", function (req, res, next) {

  Course.find({"disciplines.books.author": "Sofia"}, function (err, courses) {

    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(200).json({ courses: courses });
    next();

  });
});

app.post("/courses", function (req, res, next) {

  var course = new Course(req.body);
  course.save(function (err, courseResponse) {

    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(200).json({ course: courseResponse });
    next();

  });

});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("App waiting for requests at http://%s:%s", host, port);

});
