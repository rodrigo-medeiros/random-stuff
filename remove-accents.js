var fs = require('fs')
  , Iconv = require('iconv').Iconv;

var path = process.argv[2];
var iconv = new Iconv('ISO-8859-1', 'UTF-8');

// First I have to check if the path is directory or not.
fs.stat(path, function (err, stats) {
  if (err) {
    console.log("Some serious shit happened while evaluating your path: " + 
                err);
    return;
  }
  if (stats.isFile()) {
    console.log(path + " is a FILE. You must pass a DIRECTORY as the first argument!. ");
    return;
  }
  if (stats.isDirectory()) {

    // Then, I check all the files...
    fs.readdir(path, function (err, files) {
      if (err) {
        console.log("Some serious shit happened while oppening this directory: " + 
                    err);
        return;
      }

      // ... but read just the .srt files...
      files.forEach(function (file) {
        if (file.split('.').reverse()[0].toLowerCase() === 'srt') {

          // ...convert them to UTF-8...
          fs.readFile(path + file, null, function (err, data) {
            if (err) {
              console.log("Some serious shit happened while reading file " +
                          file + ": " + err);
              return;
            }
            var text = iconv.convert(data).toString();
            // ... and remove all accents of them.
            fs.writeFile(path + file.split('.srt').join('') + '_NEW.srt',
                         removeAccents(text),
                         function (err) {
                           if (err) {
                             console.log("Some serious shit happened while writting to the new file: " + err);
                           }
                         });
          });
        }
      });
    });
  }
});

// A simple function to remove accents
function removeAccents(strAccents) {
  var strAccents = strAccents.split('')
    , strAccentsOut = new Array()
    , strAccentsLen = strAccents.length
    , accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
    , accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  for (var y = 0; y < strAccentsLen; y++) {
    if (accents.indexOf(strAccents[y]) != -1) {
      strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
    } else {
      strAccentsOut[y] = strAccents[y];
    }
  }
  strAccentsOut = strAccentsOut.join('');
  return strAccentsOut;
}
