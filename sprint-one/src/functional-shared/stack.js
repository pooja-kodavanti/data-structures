var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.height = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
  this.storage[this.height] = value;
  this.height++;
  return value;
},
  pop: function() {
  this.height--;
  var popped = this.storage[this.height];
  delete this.storage[this.height];
  return popped;
},
  size: function() {
  if (this.height < 0) {
    return 0;
  } else {
    return this.height;
  }
}
};


