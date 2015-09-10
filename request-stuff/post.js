var request = require('request');

request.post('http://localhost:3000/test', function (error, res, body) {
  console.log(res.statusCode);
  console.log(res.headers["custom-attr"]);
});
