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
    return this.root === null;
  }

  //To inseart a value in node
  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //To inseart a node in the tree
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      //first check the incoming value is less than root node ,
      //if its value is lees than root node  , then it should be placed in left side
      //Lesser value
      if (root.left === null) {
        root.left = newNode;
      } else {
        //that means the left node is not empty
        this.insertNode(root.left, newNode);
      }
    } else {
      // this condition when the new node value is greater than root node ,
      //it will be placed right side
      //Greater value
      if (root.right === null) {
        root.right = newNode;
      } else {
        //that means the right node is not empty ,
        this.insertNode(root.right, newNode);
      }
    }
  }

  //Search , to search the inserted value in a tree
  //Rule, if the search value is < root value , then search to left node
  //If the search value is > root value , then search to right node

  search(root, num) {
    if (!root) {
      return false;
    } else {
      if (root.value === num) {
        return true;
      } else if (num < root.value) {
        //then in this case , we move to search in the left node
        //the left node contain, value less than root node , according to binray tree search rule
        return this.search(root.left, num);
      } else {
        return this.search(root.right, num);
      }
    }
  }

  //read Node value first
  preOrder() {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  //read Node value in the middle
  inOrder() {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  //read the Node value in the end
  postOrder() {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(12);
bst.insert(8);
bst.insert(10);

console.log(bst.search(bst.root, 8));
console.log(bst.search(bst.root, 12));
console.log(bst.search(bst.root, 13));
