router.get('/sample', function(req, res) {

  var formpass = req.body.password,
      user_name = req.body.userName,
      sql = "select * from user where user_name = 'monicathaneer'";
  var db = mysql.createConnection(config);

  db.connect(function (err) {
    // you should definitely handle the errors here
  });

  db.query(sql, function (err_query, data) {
    if (formpass === data[0].password) {
        res.render(
          'Login',
          {"Login": data});
     }
  });
});
