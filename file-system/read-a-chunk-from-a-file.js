var fs = require('fs');

fs.open('a.txt', 'r', function (err, fd) {
  if (err) {
    console.log(err);
    return;
  }
  var readBuffer = new Buffer(5),
      bytesRead = 0;

  (function readBytes () {
    fs.read(fd, readBuffer, bytesRead, readBuffer.length - bytesRead, 10 + bytesRead, function (err, bytes) {
      if (err) {
        console.log(err);
        return;
      }
      bytesRead += bytes;
      if (bytesRead == readBuffer.length) {
        console.log(readBuffer.toString());
      } else {
        readBytes();
      }
    });
  })();
});
