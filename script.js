function makeAjaxRequest () {
  $.ajax({
    url: 'http://loalhost:3000/api/user/5490dabad8b70c591a2d67e9',
    dataType: 'json',
    success: function (json) {
      console.log(json);
    },
    error: function (jqXHR, error, errorThrown) {
      console.log(error);
    },
    type: 'GET'
  });
}

function makeAjaxGetRequest () {
  $.get('localhost:3000', { mydata: 'content' }, function (response) {
    console.log(response);
  });
}
