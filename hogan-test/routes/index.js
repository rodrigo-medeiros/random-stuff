var express = require('express'),
    exec = require('exec');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  exec('ls -1', function (err, out, code) {
    var result = out.split('\n'),
        filesArray = [];
    result.map(function (file, index) {
      filesArray.push({index: ++index, file: file});
    });
    res.render('index', {title: "File Explorer", result: filesArray});
  });
});

module.exports = router;
