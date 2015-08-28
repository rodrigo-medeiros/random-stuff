var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '******',
  database: 'test'
});

connection.connect();

var query = connection.query('UPDATE users SET password = ? WHERE username = ?', ['test', 'one'], function (err, rows, fields) {
  if (err) {
    console.log(err);
  } 

  console.log(rows);
  console.log(query.sql);

  process.exit(1);
});
