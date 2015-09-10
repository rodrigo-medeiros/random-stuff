var express = require('express');
var app = express();

app.post('/test', function (req, res) {
  res.end(res.writeHead(200, {
    "Custom-attr": "custom message"
  }));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app running at http://%s:%s", host, port);

});
