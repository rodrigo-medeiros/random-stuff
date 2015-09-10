'use strict';

var async = require('async');

var arr = [ 1, 2, 3, 4, 5, 6];

var logItem = function (item) {
  console.log(item);
};

async.each(arr, function (item, callback) {
  logItem(item);
  callback();
}, function (error) {
  if (error) console.log(error);
});
