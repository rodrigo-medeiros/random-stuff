var http = require('http');
var request = require('request');
var appender = require('file-appender');

var files = [
  './file1.txt',
  './file2.txt'
];

var server = http.createServer(function (req, res) {

  if (req.method === 'GET') {
    appender(files).pipe(res);

  }

});

server.listen(3000);
