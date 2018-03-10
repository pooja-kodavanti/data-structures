var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
  
};



// O(log n)
BinarySearchTree.prototype.insert = function(value) {
  var node = this;
  if (value < node.value) {
    if (!node.left) {
    node.left = new BinarySearchTree(value);
    } else {
    node.left.insert(value);
    }
  }
  if (value > node.value) {
    if (!node.right) {
      node.right = new BinarySearchTree(value);
    } else {
      node.right.insert(value);
    }
  }
};

// O(log n)
BinarySearchTree.prototype.contains = function(target) {
  var hasNode = false;
  
  //if node value is equal to target, return true
  //if node value < target, return .contains(node.left) (vv for right)
  var checkTree = function(node) {
    // console.log(node)
    if (node.value === target) {
      hasNode = true;
    }

    if (target < node.value) {
      if (node.left) {
        checkTree(node.left);
        
      }
    }
    if (target > node.value) {
      if (node.right) {
        checkTree(node.right);
      }
    }
  }
  checkTree(this);
  return hasNode;
  
};


// O(n)
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var logItems = function(node) {
    cb(node.value);
    if (node.left) {
      logItems(node.left);
    }
    if (node.right) {
      logItems(node.right)
    }
  }
  logItems(this);
};
// create array
// create function that pushes node values into array
// find midpoint 
// sort --> array.slice(0, mipoint) array.slice(midpoint, array.length - 1)
// Base case: array.length < 3
// push mid to first node
// push mid.L to 

BinarySearchTree.prototype.sortArray = function() {
  var array = [];
  var func = function(value) { array.push(value); };
  var sortA = function(node) {
    // console.log(node)
    func(node.value);
    if (node.left) {
      sortA(node.left);
    }
    if (node.right) {
      sortA(node.right)
    }
  }
  
  sortA(this);
  console.log(array);
  function sortNumber(a,b) {
    // console.log('a: ',a)
    // console.log('b: ',b)
    return a-b;
  }
  array.sort(sortNumber);
  console.log(array);
  return array;
};

BinarySearchTree.prototype.getHeight = function() {

};

BinarySearchTree.prototype.rebalanceTree = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
