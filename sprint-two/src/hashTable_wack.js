

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


// Big-O O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);

  // console.log(this._storage.set(index));

  if (!this._storage[index]) {
    // this._storage[index] = [tuple];
    this._storage.set(index, tuple);
    // console.log(this._storage.get(index));
    // console.log(this._storage);
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

  // if (!this._storage[index]) {
  //   return undefined;
  // }
  
  var bucket = this._storage.get(index);
  console.log(bucket)


  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1]; 
    }
  }
  


  // console.log(this._storage.get(index)[0]);
  // console.log(this._storage.get(index)[0][0]);

  // var bucket = this._storage.get(index)

  // console.log(bucket)
  // console.log(this._storage.get(index))
  
    // console.log(tuple);
    // console.log(this._storage.get(index))
  //   if (this._storage.get(index) === k) {
  //     return tuple[1];
  //   }
  // })
};

// Big-O O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


