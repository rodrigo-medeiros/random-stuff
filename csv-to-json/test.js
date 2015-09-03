var fs = require('fs');
var data = fs.createReadStream("myfile.csv");

var Converter = require("csvtojson").Converter;

var converter = new Converter({ constructResult: true });

converter.on('end_parsed', function (jsonObj) {
  console.log(jsonObj);
});

data.pipe(converter);
