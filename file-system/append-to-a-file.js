var fs = require('fs');

fs.open('a.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }

