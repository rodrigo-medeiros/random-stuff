var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(bodyParser.json());
app.use(allowCrossDomain);

app.get('/', function (req, res) {
  var mydata = req.param('mydata');
  if (mydata === 'content') {
    console.log('foo');
    res.jsonp({ message: 'you sent content.' });
  } else {
    console.log(params);
    res.jsonp({ message: 'you sent something else.' });
  }
});

app.listen(3000);