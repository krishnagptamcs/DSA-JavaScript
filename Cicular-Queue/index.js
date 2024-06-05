class CircularQueue {
  constructor(capacity) {
    // it will initialized an array of fixed size , capacity
    this.item = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    // in enque adding the elemnt from rear
    // check the array is not full
    if (!this.isFull()) {
      // if the rear pointer is -1 , then make it 0
      // if the rear pointer become eqaul to capactiy then its reminder will become its value ,
      //ex -> ponter = 5  and capacity = 5; divide both them , remainder is 0 , then pointer will not exceed its array lentgh it will become in 0 position
      this.rear = (this.rear + 1) % this.capacity;

      // adding the element on this position
      this.item[this.rear] = element;
      // after adding the elemnt in array , increase the length by 1
      this.currentLength += 1;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue(element) {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.item[this.front];
    this.item[this.front] = null;
    //ex -> ponter = 5  and capacity = 5; divide both them , remainder is 0 , then pointer will not exceed its array lentgh it will become in 0 position
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.item[this.front];
    } else {
      return null;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let i;
      let str = "";

      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.item[i] + " ";
      }

      str += this.item[i];

      console.log(str);
    }
  }
}


const queue =  new CircularQueue(5);

console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());

queue.enqueue(80);

queue.print();