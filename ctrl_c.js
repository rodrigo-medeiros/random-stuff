var tty = require('tty');

process.stdin.on('keypress', function (chunk, key) {
  if (key && key.name === 'c' && key.ctrl) {
    console.log('yeah...');
    process.exit();
  }
});

/*setTimeout(function () {
  console.log('This is the end');
}, 5000);

process.on('SIGINT', function () {
  console.log('blah');
  process.exit(1);
});*/
