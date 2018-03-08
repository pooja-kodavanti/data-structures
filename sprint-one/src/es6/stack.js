class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
   this.height = 0;
   this.storage = {};
  }
  push(value) {
    this.storage[this.height] = value;
    this.height++;
    return value;
  }
  pop() {
    this.height--;
    var data = this.storage[this.height];
    delete this.storage[this.height];
    return data;
  }
  size() {
    if (this.height < 0) {
      return 0;
    } else {
      return this.height;
    }
  }

}