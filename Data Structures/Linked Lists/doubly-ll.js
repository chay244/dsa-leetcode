class Node {
  constructor(val, prv, next) {
    this.val = val;
    this.prv = prv;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prv = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prv;
      this.tail.next = null;
      poppedNode.prv = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prv = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }

  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prv = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index <= this.length / 2) {
      let counter = 0;
      let currentNode = this.head;
      while (index !== counter) {
        currentNode = this.head.next;
        counter++;
      }
      return currentNode;
    } else {
      let counter = this.length - 1;
      let currentNode = this.tail;
      while (index !== counter) {
        currentNode = this.tail.prv;
        counter--;
      }
      return currentNode;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
    }
    return !!node;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    let newNode = new Node(value);
    newNode.next = afterNode;
    newNode.prv = beforeNode;
    beforeNode.next = newNode;
    afterNode.prv = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.shift(value);
      return true;
    }
    if (index === this.length - 1) {
      this.pop(value);
      return true;
    }
    let removeNode = this.get(index);
    let beforeNode = removeNode.prv;
    let afterNode = removeNode.next;
    beforeNode.next = removeNode.next;
    afterNode.prv = removeNode.prv;

    removeNode.prv = removeNode.next = null;
    this.length--;

    return removeNode;
  }
}

let list = new DoublyLinkedList();
list.push("A");
// K
list.push("B");
list.push("C");

// console.log(list);
list.get(0);

// A  <-> B <-> C <-> D
//
