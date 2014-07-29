var request = require('request');

request('https://coderbits.com/rodrigomangue.json')
  .on('data', function (data) {
    console.log(JSON.stringify(data.toString()));
  })
  .on('end', function () {
    console.log('This is the end...');
  });
