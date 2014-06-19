var exec = require('exec');

exec('ls -1', function (err, out, code) {
  console.log(out.length);
  if (typeof out) {
    var arr = out.split('\n');
    console.log(JSON.stringify(arr));
  }
});
