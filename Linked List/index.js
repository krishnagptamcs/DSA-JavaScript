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
  // since element is adding in the starting position
  //timecomplexity will be O(1) ,,constant
  prepend(value) {
    //calling an node class which is define above & passing the value
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // this method add the node in the end
  // this method check both if it is empty and not empty
  // since element is adding in the ending position  so it havw to traverse all the element
  //timecomplexity will be O(n) ,,linear
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      // tracking the previous also
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      // assing the node in the last position
      prev.next = node;
    }
    this.size++;
  }

  // to insert the node on the given index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("either list is empty or the indeex is not valid ");
    }

    // if the index is 0 then list is empty
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValue = "";
      while (curr) {
        listValue += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValue);
    }
  }
}

const list = new LinkedList();

console.log("is empty", list.isEmpty());
console.log("list size", list.getSize());

list.print();

list.append(10);
list.print();

list.append(25);
list.append(35);
list.print();

list.insert(80,3);
list.print();
