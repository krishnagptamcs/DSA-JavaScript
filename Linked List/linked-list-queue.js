const LinkedList = require("./head-tail");

class LinkedListQueue {
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

  enqueue(value) {
    //to add the value in end
    // using the append method

    this.list.append(value);
  }

  dequeue() {
    // to remove the value from start
    // using remove from front method

    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }
}

const stack = new LinkedListQueue();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.print();
console.log(stack.getSize());
