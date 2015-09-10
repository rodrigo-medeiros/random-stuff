var fs = require('fs');

var read = fs.createReadStream('/testingshit');

read.on('error', function (error) {
  console.log(error);
  console.log(error.code);
});
