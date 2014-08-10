var request = require('request');

request('http://ancient-falls-7604.herokuapp.com/users/1/posts', function (error, response, body) {
  console.log(JSON.parse(body).user_posts[0]);
});
