// receive data from contact from to
// and pass it to mailer.py
onmessage = function(e){
  $.ajax({
    url: "../scripts/mailer.py",
    type: "post",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: JSON.stringify({
      data: e.data
    }),
    success: function(response){
      postMessage('success');
    }
  });
};