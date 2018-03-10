

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};
var hash = new HashTable;

// Big-O O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);

  if (!bucket) {
    this._storage.set(index,[tuple]) 
  } 

  // Case where did not find existing key
  var wasFound = false;
  this._storage.each(function(buck, i) {
    if (i === index) {
      if (buck.length > 0) {
        for (var j = 0; j < buck.length; j++) {
          if (buck[j][0] === k) {
            buck[j][1] = v;
            wasFound = true;
          }
        }
      }

    }
  });
  // Case where did not find existing key
  if (wasFound === false) {
    this._storage.each(function(buck, i) {
      if (i === index) {
        var bucketLength = buck.length;
        buck[bucketLength] = tuple;
      }
    });
  }
};

// Big-O O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;

  this._storage.each(function(buck, i) {
    if (i === index) {
      for (var i = 0; i < buck.length; i++) {
        if (buck[i][0] === k) {
        result = buck[i][1]; 
        }
      }
    }
  });
  return result;
};

// Big-O O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(buck, i) {
    if (i === index) {
      for (var i = 0; i < buck.length; i++) {
        if (buck[i][0] === k) {
          buck.splice(i,1);
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


