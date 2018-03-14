

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};


// Big-O O(1)
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  // console.log(this.nodes);
  // console.log(this.nodes);
  
};

// Big-O O(n)
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if(this.nodes.indexOf(node) !== -1) {
  // return true;
  // } else {
  //   return false;
  // }
  return this.nodes.indexOf(node)!== -1;
};

// Big-O O(n)
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    this.removeEdge(node, this.edges[node])
    var countIndex = this.nodes.indexOf(node);
    this.nodes.splice(countIndex,1);
    if (this.edges[node]) {
      delete this.edges[node];
    }
};


// Big-O O(n)
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // input: two nodes
  // output: boolean
  // goal: see if fromNode.edges contains toNode

    return this.edges[fromNode].indexOf(toNode) !== -1 && this.edges[toNode].indexOf(fromNode) !== -1
};


// Big-O O(n)
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // input: two nodes
  // result: edges array of fromNode adds toNode
  // result: edges array of toNode adds fromNode
  if (!this.edges[fromNode]) {
    this.edges[fromNode] = [];
  }
  if (!this.edges[toNode]) {
    this.edges[toNode] = [];
  }
  // console.log(this.edges)
  this.edges[fromNode].push(toNode); 
  this.edges[toNode].push(fromNode);

  // console.log(this.edges)
  // console.log(toNode)
  
};

// Big-O O(n)
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edges[fromNode]) {
    if (this.edges[fromNode].indexOf(toNode) !== -1) {
      this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
    }
  }
  if (this.edges[toNode]) {
    if (this.edges[toNode].indexOf(fromNode) !== -1) {
      this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode), 1);
    } 
  }
};

// Big-O O(n)
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node){
    return cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


