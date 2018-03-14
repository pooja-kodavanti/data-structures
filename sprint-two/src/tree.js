
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains= treeMethods.contains;

  return newTree;
};

var treeMethods = {};

// Big-O: O(1)  
treeMethods.addChild = function(value) {
  var child = new Tree(value);  
  this.children.push(child);
};

// Big-O: O(n) 
treeMethods.contains = function(target) {
  var node = this;
  var isMatch = false; 
  
  var checkNode = function(node) {
    if (node.value === target) {
        isMatch = true;
    } else if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i]);
      }
    }
  }
  checkNode(node);
  return isMatch;
};
