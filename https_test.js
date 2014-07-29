var https = require('https');

//https.globalAgent.options.secureProtocol = 'SSLv2_method';

var options = {
  hostname: "login.launchpad.net",
  port: 8080,
  auth: "rodrigo.mangue@gmail.com:Yi8S4SRxsHb6",
  path: "/"
};

https.get(options, function (res) {
  console.log(res);
  res.pipe(process.stdout);
  res.on('data', function (data) {
    process.stdout.write(data);
  });
}).on('error', function (err) {
  console.log(err);
});
