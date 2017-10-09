var DJEntry = require('./../js/journal.js').DJEntryModule;

$(document).ready(function() {
  $('#title-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new DJEntry();
    var output;

    $("#entry-submit").click(function() {
      console.log("test phrase");
    });
  });
});
