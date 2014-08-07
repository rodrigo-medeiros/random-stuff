var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
