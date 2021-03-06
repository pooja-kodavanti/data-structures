var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.height = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.height] = value;
  this.height++;
  return value;
}
Queue.prototype.dequeue = function() {
  if (this.height > 0) {
    this.height--;
    var data = this.storage[0];
    delete this.storage[0];
    for (var i = 0; i < this.height; i++) {
      this.storage[i] = this.storage[i+1]; 
    }
  return data; 
}
}

Queue.prototype.size = function() {
  if (this.height < 0) {
    return 0;
  } else {
    return this.height;
  }
}


