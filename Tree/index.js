//This class for node , that means a single piece of tree ,
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Is empty ?
  isEmpty() {
    this.root === null;
    console.log("The tree is empty right now");
  }
}
