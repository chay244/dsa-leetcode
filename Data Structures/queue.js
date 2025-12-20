class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.last = null;
    }
    let poppedItem = this.first;
    this.first = this.first.next;
    this.size--;
    return poppedItem.val;
  }
}

let list = new Queue();
list.enqueue("Hi");
list.enqueue("Hello");
list.enqueue("Bye");
//    Hi hello
console.log(list);
