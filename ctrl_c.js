setTimeout(function () {
  console.log('This is the end');
}, 5000);

process.on('SIGINT', function () {
  console.log('blah');
  process.exit(1);
});
