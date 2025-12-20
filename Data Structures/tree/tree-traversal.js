class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let node = new Node(val);
    let parentNode = this.root;
    while (true) {
      if (val === parentNode.val) {
        return undefined;
      }
      if (val < parentNode.val) {
        if (parentNode.left === null) {
          parentNode.left = node;
          return this;
        } else {
          parentNode = parentNode.left;
        }
      } else if (val > parentNode.val) {
        if (parentNode.right === null) {
          parentNode.right = node;
          return this;
        } else {
          parentNode = parentNode.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }

  //   Breadth First Solution
  BFS() {
    let data = [];
    let node = this.root;
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreorder() {
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }

  DFSPostorder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);

    return data;
  }

  DFSInorder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(6);
tree.insert(4);

console.log(tree.DFSPostorder());
// console.log(tree);

//      10;
//   5;     11;
// 4  6;
