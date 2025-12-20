class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex].priority > this.values[index].priority) {
        return this;
      } else {
        [this.values[parentIndex], this.values[index]] = [
          this.values[index],
          this.values[parentIndex],
        ];
        index = parentIndex;
      }
    }
  }

  dequeue() {
    let index = this.values.length - 1;
    let parentIndex = 0;
    [this.values[index], this.values[parentIndex]] = [
      this.values[parentIndex],
      this.values[index],
    ];
    let poppedValue = this.values.pop();
    this.sinkDown();
    return poppedValue;
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let swap = null;
      let leftChild, rightChild;

      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
    }
  }
}

let heap = new PriorityQueue();
heap.enqueue("Common Cold", 1);
heap.enqueue("Gun Shot", 5);
heap.enqueue("High fever", 2);

console.log(heap.values);

