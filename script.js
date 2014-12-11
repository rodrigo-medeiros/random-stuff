function makeAjaxRequest () {
  $.ajax({
//    url: 'http://127.0.0.1:3000',
    url: 'http://api.joind.in/v2.1/talks/10889',
    data: {
      mydata: "json"
    },
    dataType: 'jsonp',
    success: function (json) {
      console.log(json);
    },
    error: function (jqXHR, error, errorThrown) {
      console.log(error);
    },
    type: 'GET'
  });
}
