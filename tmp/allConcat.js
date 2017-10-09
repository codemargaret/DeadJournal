var DJEntry = require('./../js/journal.js').DJEntryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {

    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();

    var newEntry = new DJEntry(title, body);
    var wordCount = newEntry.wordCount(body);
    var vowelCount = newEntry.vowelCount(body);
    var consonantCount = newEntry.consonantCount(body);
    var getTeaser = newEntry.getTeaser(body);
    // var output = $()


    $("#titleoutput").append("<li><h1>" + title + "</h1></li>");
    $("#titleoutput").append("<li><h3>" + "Teaser:" + getTeaser + "</h3></li>");
    $("#titleoutput").append("<li><h3>" + body + "</h3></li>");
    $("#titleoutput").append("<li><h3>" + "There are " + wordCount + " words in this entry." + "</h3></li>");
    $("#titleoutput").append("<li><h3>" + "There are " + vowelCount + " vowels in this entry." + "</h3></li>");
    $("#titleoutput").append("<li><h3>" + "There are " + consonantCount + " consonants in this entry." + "</h3></li>");
  });
});

