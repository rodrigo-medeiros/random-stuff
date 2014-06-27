var fs = require('fs');

fs.open('a.txt', 'w', function (err, fd) {
  if (err) {
    throw err;
  }
  var buffer = new Buffer('ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz'),
      written = 0;

  (function writeIt() {
    fs.write(fd, buffer, 0 + written, buffer.length - written, 0 + written, function (err, bytesWritten) {
      if (err) {
        throw err;
      }
      written += bytesWritten;
      if (written === buffer.length) {
        console.log('Done!');
      } else {
        writeId();
      }
    });
  })();
});
