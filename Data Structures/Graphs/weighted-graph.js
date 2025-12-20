class WeightedGraph {
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

  addEgde(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  removeEgde(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e !== v1);
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEgde("A", "B", 4);
g.addEgde("A", "C", 2);
g.addEgde("B", "E", 3);
g.addEgde("C", "D", 2);
g.addEgde("C", "F", 4);
g.addEgde("D", "E", 3);
g.addEgde("D", "F", 1);
g.addEgde("E", "F", 1);

console.log(g.adjacencyList);
// {
//   A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ],
//   B: [ { node: 'A', weight: 4 }, { node: 'E', weight: 3 } ],
//   C: [
//     { node: 'A', weight: 2 },
//     { node: 'D', weight: 2 },
//     { node: 'F', weight: 4 }
//   ],
//   D: [
//     { node: 'C', weight: 2 },
//     { node: 'E', weight: 3 },
//     { node: 'F', weight: 1 }
//   ],
//   E: [
//     { node: 'B', weight: 3 },
//     { node: 'D', weight: 3 },
//     { node: 'F', weight: 1 }
//   ],
//   F: [
//     { node: 'C', weight: 4 },
//     { node: 'D', weight: 1 },
//     { node: 'E', weight: 1 }
//   ]
// }
