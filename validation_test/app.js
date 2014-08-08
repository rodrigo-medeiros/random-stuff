var express = require('express'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    app = express();

app.use(bodyParser.json());
app.use(expressValidator());

app.post('/', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
