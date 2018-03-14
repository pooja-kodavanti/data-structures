

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};
var hash = new HashTable;

// Big-O O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket); 
  } 
  var wasFound = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      wasFound = true;
      break;
    }
  }
  if (wasFound === false) {
    bucket.push([k,v]);
  }
};

// Big-O O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      result = bucket[i][1];
    }
  }
  return result;
};

// Big-O O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


