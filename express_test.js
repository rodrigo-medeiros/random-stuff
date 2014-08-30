var express = require( 'express' );
var app = express();

app.get('/:test', function(req, res){
  console.log( "hello word: " + JSON.stringify(req.params) );
  res.send(JSON.stringify(res.params));
});

app.get('/', function (req, res) {
  var message = 'Hello dude!';
  console.log(message);
  res.send(message);
});

app.listen(3000);
