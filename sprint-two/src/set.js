var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

// Big-O O(1)
setPrototype.add = function(item) {
  this._storage.push(item);
};

// Big-O O(n)
setPrototype.contains = function(item) {
  return this._storage.indexOf(item) !== -1;
};

// Big-O O(n)
setPrototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i,1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
