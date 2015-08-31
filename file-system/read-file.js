var fs = require('fs');

fs.readFile('a.txt', { encoding: 'utf-8' }, function (err, data) {
  console.log(data);
  process.exit(1);
});
