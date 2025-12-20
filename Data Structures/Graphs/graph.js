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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Hyderabad");
console.log(g);
// {Tokyo:[],Aspen:[],Hyderabad:[]}

g.addEgde("Tokyo", "Aspen");
// {Tokyo:[Aspen],Aspen:[Tokyo],Hyderabad:[]}
