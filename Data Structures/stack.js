class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
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

let list = new Stack();
list.push("Hi");
list.push("Hello");
list.push("Bye");
// bye -> hello  -> Hi
console.log(list);
