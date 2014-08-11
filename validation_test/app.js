var express = require('express'),
    util = require('util'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    app = express();

app.use(bodyParser.json());
app.use(expressValidator());

app.post('/', function (req, res) {

  req.checkBody('name', 'Missing params...').notEmpty();
  var products = req.body.products;
  products.forEach(function (item) {
    req.checkBody('quantity', 'Must be an integer...').isInt();
  });

  var errors = req.validationErrors();

  if (errors) {
    res.status(200).send('There have been validation errors: ' + util.inspect(errors));
    return;
  }
  res.json({
    name: req.body.name,
    products: req.body.products
  });
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
