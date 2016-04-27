var mongoose = require("mongoose");
var url = "mongodb://localhost/hooks-test";

mongoose.connect(url);
console.log("isonerror");
var mydb = mongoose.connection;
console.log("ismydb");
