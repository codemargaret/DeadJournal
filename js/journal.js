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
