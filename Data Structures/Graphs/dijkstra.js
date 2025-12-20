class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEgde(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstra(start, finish) {
    let priorityQueue = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let currentNode;
    // Initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      currentNode = priorityQueue.dequeue().val;
      if (currentNode === finish) {
        while (previous[currentNode]) {
          path.push(currentNode);
          currentNode = previous[currentNode];
        }
        break;
      }

      if (currentNode || distances[currentNode] !== Infinity) {
        for (const neighbours in this.adjacencyList[currentNode]) {
          const neighbour = this.adjacencyList[currentNode][neighbours];
          const neighbourNode = neighbour.node;
          const neighbourWeight = neighbour.weight;

          let smallestDistance = distances[currentNode] + neighbourWeight;
          if (smallestDistance < distances[neighbourNode]) {
            distances[neighbourNode] = smallestDistance;
            previous[neighbourNode] = currentNode;
            priorityQueue.enqueue(neighbourNode, smallestDistance);
          }
        }
      }
    }
    return path.concat(currentNode).reverse();
  }
}

let g = new WeightedGraph();
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

g.dijkstra("A", "E");
