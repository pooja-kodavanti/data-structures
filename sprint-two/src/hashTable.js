

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};
var hash = new HashTable;

// Big-O O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];

  if (!this._storage[index]) {
    this._storage[index] = [tuple];
  }
  
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
    } else {
      this._storage[index].push(tuple);
    }
  }
};

// Big-O O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[index]) {
    return undefined;
  }
  
  var bucket = this._storage[index];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1]; 
    }
  }
  return undefined;
};

// Big-O O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


