var DJEntry = require('./../js/journal.js').DJEntryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new DJEntry();
    var output;
    $("#titleoutput").text(output);

    });
  });
});
