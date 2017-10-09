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
