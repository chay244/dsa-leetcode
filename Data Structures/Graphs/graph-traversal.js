class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEgde(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEgde(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEgde(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e !== v1);
  }

  DFSRecursive(vertex) {
    let result = [];
    let visited = {};
    function traverse(vertex, adjacencyList) {
      let vertextList = adjacencyList[vertex];
      if (!vertextList.length) return null;
      result.push(vertex);
      visited[vertex] = true;
      for (let e of vertextList) {
        if (!visited[e]) {
          traverse(e, adjacencyList);
        }
      }
    }
    traverse(vertex, this.adjacencyList);
    return result;
  }

  DFSIteration(vertex) {
    let result = [];
    let stack = [];
    let visited = {};
    stack.push(vertex);
    while (stack.length) {
      let vertex = stack.pop();
      let vertextList = this.adjacencyList[vertex];
      result.push(vertex);
      visited[vertex] = true;
      for (let e of vertextList) {
        if (!visited[e]) {
          visited[e] = true;
          stack.push(e);
        }
      }
    }
    return result;
  }

  // adjacencyList: {
  //     A: [ 'B', 'C' ],
  //     B: [ 'A', 'D' ],
  //     C: [ 'A', 'E' ],
  //     D: [ 'B', 'E', 'F' ],
  //     E: [ 'C', 'D', 'F' ],
  //     F: [ 'D', 'E' ]
  //   }

  BFSIteration(vertex) {
    let result = [];
    let queue = [];
    let visited = {};
    queue.push(vertex);
    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);
      visited[vertex] = true;
      let neighbours = this.adjacencyList[vertex];
      for (let e of neighbours) {
        if (!visited[e]) {
          visited[e] = true;
          queue.push(e);
        }
      }
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
// console.log(g);
// { adjacencyList: { A: [], B: [], C: [], D: [], E: [], F: [] } }

g.addEgde("A", "B");
g.addEgde("A", "C");
g.addEgde("B", "D");
g.addEgde("C", "E");
g.addEgde("D", "E");
g.addEgde("D", "F");
g.addEgde("E", "F");
// console.log(g);

// adjacencyList: {
//     A: [ 'B', 'C' ],
//     B: [ 'A', 'D' ],
//     C: [ 'A', 'E' ],
//     D: [ 'B', 'E', 'F' ],
//     E: [ 'C', 'D', 'F' ],
//     F: [ 'D', 'E' ]
//   }

console.log(g.BFSIteration("A"));
