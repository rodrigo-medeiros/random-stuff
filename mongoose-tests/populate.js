var request = require('request');
var data = require('./data/courses.json');

var options = {
  uri: 'http://localhost:3000/courses',
  method: 'POST',
  json: true
};

data.forEach(function (item) {

  options.body = item;

  request(options, function (err, response, body) {

    if (err) {
      throw new Error(err);
    }

    console.log(body);
    
  });
});
