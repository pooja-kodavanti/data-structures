

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};
var hash = new HashTable;
// console.log(hash)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return index;
  // console.log(k);
  // console.log(v);
  // console.log(index);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(k);
  
  console.log(index);
  return index;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


