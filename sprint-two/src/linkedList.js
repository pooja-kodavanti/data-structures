var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  // Big-O:   O(1)
  list.addToTail = function(value) {
    var current = new Node(value);
    if(!list.head) {
      list.head = current;
      list.tail = current;
    }
    list.tail.next = current;
    list.tail = current;
    
  };

  // Big-O:   O(1)
  list.removeHead = function() {
    var current = list.head;
    // console.log(list)
    // if(!(list.head === null)) {
    //   list.head = current.next;
    // }
    // console.log(list.head.next)
    list.head = list.head.next;
    return current.value;
  };

  // Big-O:   O(n)
  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
     // console.log(current.value)
      if (current.value == target) {
        return true;
      }
    current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
