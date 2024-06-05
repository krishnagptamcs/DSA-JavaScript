// Enqueue -> add an element to the queue
// Dequeue --> remove the oldest element from the queue
//Peek --> get the value of the element at the front of the queue without removing it
//isEmpty-> check if the queue is empty
//size--> get the number of element in the queue
// print--> visualise the elements in the queue

class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(element) {
    // it insert the element at the reare end of queue
    this.item.push(element);
  }

  dequeue() {
    // this will remove the elemnt from the front end of the queu
    // the fornt of an array contain the oldest element
    return this.item.shift();
  }

  isEmpty() {
    return this.item.length === 0;
  }

  peak() {
    // since it return the first element ,
    // so before precedding check the element at 0 position is not empty
    if (!this.isEmpty()) {
      return this.item[0];
    } else {
      return null;
    }
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.toString());
  }
}

// since it is an array ,the time complexity will be linear 

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());

queue.print();

console.log(queue.dequeue());
console.log(queue.peak());

