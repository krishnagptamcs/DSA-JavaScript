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

  //Breadth First Search
  //BFS traverse approach

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  //To find Min  & Max logic method
  //Min Method
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      this.min(root.left);
    }
  }

  //Max Method
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      this.max(root.right);
    }
  }

  //To delete a node

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    //Checking the root is not empty
    if (root === null) {
      return root; // returning root for recursion
    }

    //Comparing the value with root value
    if (value < root.value) {
      // Checking first with left node
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      //in this case , the passed value and root value is matched
      //so checking the the root.value/node is a leaf node
      //not having any children
      if (!root.left && !root.right) {
        return null;
      }

      //checking if the node not having any
      //left sub-node
      //right sub-node
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      //if both the check scenario fails ,
      //the root hase two child node
      //now , copy the order successor to the node & delete in order successor
      //order-successor of a node , is minimum value in right sub-tree

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
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
