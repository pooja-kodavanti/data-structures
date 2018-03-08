var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.height = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.height] = value;
    this.height++;
    return value;
  },    
  pop: function() {
    this.height--;
    var data = this.storage[this.height];
    delete this.storage[this.height];
    return data;
  },
  size: function() {
    if (this.height < 0) {
      return 0;
    } else {
      return this.height;
    }
  }
};

