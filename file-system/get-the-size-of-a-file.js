var fs = require('fs');

fs.stat('a.txt', function (err, stats) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats.size);
});
