var fs = require('fs');

var configFile = './text-files/package.json';
var content = fs.readFileSync(configFile);
var parsed = JSON.parse(content);

console.log(process.cwd());
console.log(process.execPath);
console.log(parsed);
