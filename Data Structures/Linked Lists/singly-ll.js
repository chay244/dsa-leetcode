class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return currentNode;
  }
  // 1 2 3 4 5

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  get(index) {
    if (index > this.length || index < 0) return null;

    let counter = 0;
    let currentNode = this.head;
    while (index !== counter) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // A B C

  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let previousNode = this.get(index - 1);

    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;

    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;

    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prv = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prv;
      prv = node;
      node = next;
    }
  }
  //   4. 6. 7. 8.
  //   tn       h
  //
}

let a = new SinglyLinkedList();
a.push("hello");
a.push("there");
a.push("!");
a.push("How");
a.push("are");
a.push("you");
a.reverse();
console.log(a);
