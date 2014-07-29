var request = require('request'),
    http = require('http');

var payload = undefined;

http.createServer(function (req, res) {
  function getPayload (callback) {
    request.post('https://coderbits.com/rodrigomangue.json', function (error, response, body) {
      var payload = JSON.stringify(body);
      console.log(payload);
      console.log(response.statusCode);
      callback();
    });
  }

  function setPayload () {
    console.log(res.statusCode);
    res.end(payload);
  }

  getPayload(setPayload);
}).listen(3000);
