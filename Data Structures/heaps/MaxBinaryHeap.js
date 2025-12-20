class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] > this.values[index]) {
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

  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);
// [ 55, 39, 41, 18, 27, 12, 33]
heap.extractMax();
console.log(heap.values);
