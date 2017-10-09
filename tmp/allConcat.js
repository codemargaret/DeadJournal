var DJEntry = require('./../js/journal.js').DJEntryModule;

$(document).ready(function() {
  console.log("document ready");
  $('#entry-form').submit(function(event) {

    event.preventDefault();
    console.log("entry form submit");
    var title = $('#title').val();
    var body = $('#body').val();
    console.log(body);
    var newEntry = new DJEntry();

    // var output = $()

    $("#titleoutput").append("<li><h1>" + title + "</h1></li>");
    $("#titleoutput").append("<li><h3>" + body + "</h3></li>");

  });
});
