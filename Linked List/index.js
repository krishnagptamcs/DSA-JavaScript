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

  //To add the node from start
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

  //To add the node from the end
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

  //To insert a node on a given index
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

  //To remove a node of a given index
  removeNode(index) {
    // when the given is not negative && not greater than size of the list
    if (index < 0 || index >= this.size) {
      return "The given node is not justified";
    }
    // If the given index is 0
    let removeNode;
    if (index === 0) {
      // taking a refrence ,
      //first assign the value of head to refrence
      //now move the head to next one
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      // when the given index is b/w the list
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  //To remove a node of the given value
  removeValue(value) {
    if (this.isEmpty()) {
      console.log("Sorry no node can be remove , empty list");
    }
    if (this.head.value === value) {
      // When the given value is head of the list
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      let removeNode;

      if (prev.next) {
        // if the previous node is not null
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      } else {
        // when the previous node is null then it means this is at its last position
        return null;
      }
    }
  }

  //To search the given value in list
  search(value) {
    // check the list is not empty
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let curr = this.head;

    // incremenring curr postition
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
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

list.insert(80, 3);
list.print();
