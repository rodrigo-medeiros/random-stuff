var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

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
