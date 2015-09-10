var iconv = require('iconv-lite');
var async = require('async');
var fs = require('fs');
var path = require('path');
var mmm = require('mmmagic'),
    Magic = mmm.Magic;

var mmm = new Magic(mmm.MAGIC_MIME_TYPE | mmm.MAGIC_MIME_ENCODING);

var file = process.argv[2];
var newFile = path.join(path.dirname(file), path.basename(file, '.srt')) + '_new.srt';


async.series([
  function (callback) {
    mmm.detectFile(file, function (error, result) {
      var arr = result.split(';');
      var charset = (arr[1].split("="))[1];

      console.log(charset);
      console.log(iconv.encodingExists(charset));
      callback();
    });
  },
  
  function (callback) {
    mmm.detectFile(file, function (error, result) {
      console.log(result);
      fs.createReadStream(file, 'utf8')
        .pipe(iconv.decodeStream('iso-8859-1'))
        .pipe(iconv.encodeStream('utf8'))
        .pipe(fs.createWriteStream(newFile));
      callback();
    });
  }, 

  function (callback) {
    mmm.detectFile(newFile, function (error, result) {
      console.log(result);
      callback();
    });
  }

], function (error, result) {
  console.log('Done!');
});
