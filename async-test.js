var async = require('async');

async.series({
  first: function (callback) {
    var wait = 5000;
    setTimeout(function () {
      callback(null, wait);
    }, wait);
  },
  second: function (callback) {
    var wait = 2000;
    setTimeout(function () {
      callback(null, wait);
    }, wait);
  }
},
function (error, results) {
  console.log(results);
});
