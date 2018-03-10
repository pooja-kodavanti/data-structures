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
  console.log(this.right);
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
        console.log(checkTree(node.left))
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
    // console.log(node)
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
