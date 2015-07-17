var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MySchema = new Schema({
  name: String,
  queryCount: {
    type: Number,
    default: 0
  }
});

MySchema.post('init', function (doc) {
  doc.queryCount++;
  doc.save();
});

var Thing = mongoose.model('Thing', MySchema);

mongoose.connect('mongodb://localhost/hooks-test');

//var thing = new Thing({
//  name: "blah"
//});
//thing.save(function (err, doc) {
//  if (err) {
//    throw err;
//  }
//});

Thing.find({name: "blah"}, function (err, docs) {
  if (err) {
    throw err;
  }
  console.log(docs);
});
Thing.find({name: "blah"}, function (err, docs) {
  if (err) {
    throw err;
  }
  console.log(docs);
});
Thing.find({name: "blah"}, function (err, docs) {
  if (err) {
    throw err;
  }
  console.log(docs);
});
