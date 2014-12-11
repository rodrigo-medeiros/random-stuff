var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  var params = req.params;
  if (req.params.mydata === 'content') {
    console.log('foo');
    res.json({ message: 'you sent content.' });
  } else {
    console.log(params);
    res.json({ message: 'you sent something else.' });
  }
});

app.listen(3000);
