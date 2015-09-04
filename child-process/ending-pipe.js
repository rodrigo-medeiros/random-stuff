var fs = require('fs'),
    spawn = require('child_process').spawn;

var grep = spawn('ls', ['-laht', '/var/log/']),
    ws = fs.createWriteStream('output.txt');

ws.on('finish', function () {
  console.log('Closing the writable stream.');
});

var stdout = grep.stdout;

stdout
  .on('data', function (data) {
    console.log(data.toString());
  })
  .on('end', function () {
    console.log('Closing the readable stream.');
    ws.end();
  });

stdout.pipe(ws, { end: false });
