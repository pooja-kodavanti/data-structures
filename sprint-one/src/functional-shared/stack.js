var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  var size = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.stackSize = stackMethods.stackSsize;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size] = value;
  this.size++;
  return value;
}
stackMethods.pop = function() {
  this.size--;
  var popped = this.storage[this.size];
  delete this.storage[this.size];
  return popped;
}
stackMethods.stackSize = function() {
  if (this.size < 0) {
    return 0;
  } else {
    return this.size;
  }
}


