(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function DJEntry(title, body) {
  this.title = title;
  this.body = body;
}

DJEntry.prototype.wordCount = function(words) {
  var wordsToCount = words.split(" ").length;
  return wordsToCount;
};

DJEntry.prototype.vowelCount = function(words) {
  var vowelNumber = words.match(/[aeiou]/gi).length;
  return vowelNumber;
};

DJEntry.prototype.consonantCount = function(words) {
  var consonantNumber = words.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  return consonantNumber;
};

DJEntry.prototype.getTeaser = function(words) {
  array = []
  var wordsToCount = words.split(" ")
  for (i = 0; i <= 7; i ++)
  array.push(wordsToCount[i])
  return array.join(" ")
};

exports.DJEntryModule = DJEntry;

},{}],2:[function(require,module,exports){
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


},{"./../js/journal.js":1}]},{},[2]);
