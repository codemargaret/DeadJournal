(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function DJEntry(title, body) {
  this.title = title;
  this.body = body;
}

DJEntry.prototype.title = function(title) {
  return title;
};

DJEntry.prototype.body = function(body) {
  return body;
};

exports.DJEntryModule = DJEntry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
