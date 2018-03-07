var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
    return storage[stackSize];
  };

  someInstance.pop = function() {
    stackSize--;
    var popped = storage[stackSize];
    delete storage[stackSize];
    return popped;
  };

  someInstance.size = function() {
    if (stackSize < 0) {
      return 0;
    } else {
      return stackSize;
    }
  };

  return someInstance;
};
