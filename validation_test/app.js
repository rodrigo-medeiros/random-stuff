var express = require('express'),
    util = require('util'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    app = express();

app.use(bodyParser.json());
app.use(expressValidator());

app.post('/', function (req, res) {

  req.checkBody('name', 'Missing params...').notEmpty();
  req.checkBody('products'[0], 'Name is required').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    res.status(200).send('There have been validation errors: ' + util.inspect(errors));
    return;
  }
  res.json({
    name: req.name
  });
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
