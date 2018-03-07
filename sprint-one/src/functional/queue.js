var Queue = function() {
  var someInstance = {};
  var qSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[qSize] = value;
    qSize++;
    return value;
  };

  someInstance.dequeue = function() {
    if (qSize > 0) {
      qSize--;
      var data = storage[0];
      delete storage[0];
      for (var i = 0; i < qSize; i++) {
        storage[i] = storage[i+1]; 
      }
      return data;   
    }          
  };

  someInstance.size = function() {
    if (qSize < 0) {
      return 0;
    } else {
      return qSize;
    }
  };

  return someInstance;
};
