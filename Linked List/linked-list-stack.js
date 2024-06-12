// import { LinkedList } from "./head-tail";

const LinkedList = require("./head-tail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }

  push(value) {
    //to add the value in start
    // using the prepend method

    this.list.prepend(value);
  }

  pop() {
    // to remove the value from end
    // using remove from front method

    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }
}

const stack = new LinkedListStack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.print();
console.log(stack.getSize());
