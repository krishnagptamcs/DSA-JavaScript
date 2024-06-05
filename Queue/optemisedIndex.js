class Queue {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    //adding the element from end
    this.item[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    //removing element from the end
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.item[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.item);
  }
}

// due to taking the item an object {} and applying all the method , on this its time complexity will be constant
