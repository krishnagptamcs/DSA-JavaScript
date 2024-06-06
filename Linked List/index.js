// A linked list is an linear data structure that includes a series of connected nodes

// Each node consist of data value ad pointer that point to the next node

//The list can be easily insterted or removed without reallocation or reorganisar=tion of the entire structre

// Random access of the element is not feaseable and accessigng an element has a linear time complexity

// it support three operation
// insertion , deletion , search

// ex-> photo gallery functinality in mobile , sliding

// NOde class which point the next node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // to initalise the value in node
  // this code , inserting the node in the start when the list is empty
  prepend(value) {
    //calling an node class which is define above & passing the value
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    }else{
        node.next = this.head;
        this.head = node
    }
    this.size++;
  }
}
