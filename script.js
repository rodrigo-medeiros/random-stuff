function makeAjaxRequest () {
    $.ajax({
      url: 'http://127.0.0.1:3000/',
      data: {
        mydata: "content"
      },
      dataType: 'text',
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
